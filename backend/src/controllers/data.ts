import ErrorHandler from "../Services/ErrorHandler";
import db from "../database/db";

export const getBuckets = async (req: any, res: any, next: any) => {
  const email = req.headers.email as string;
  try {
    const [userData] = (await db.execute(
      "SELECT id FROM users WHERE email = ?;",
      [email]
    )) as any;
    if (userData.length === 0) throw new ErrorHandler("Invalid email!", 401);
    const userId = userData[0].id;
    const [bucketData] = (await db.execute(
      "SELECT bucket_name FROM buckets WHERE website_user = ?;",
      [userId]
    )) as any;
    res.status(200).json(bucketData);
  } catch (error: any) {
    if (error.statusCode) return next(error);
    else return next(new ErrorHandler("Server Error!", 500));
  }
};

export const getCards = async (req: any, res: any, next: any) => {
  const email = req.headers.email;
  try {
    const [userData] = (await db.execute(
      "SELECT id FROM users WHERE email = ?;",
      [email]
    )) as any;
    if (userData.length === 0) throw new ErrorHandler("Invalid email!", 401);
    const userId = userData[0].id;

    const [cardsData] = (await db.execute(
      "SELECT cards.id, cards.card_name, cards.link, buckets.bucket_name FROM cards INNER JOIN buckets ON buckets.id = cards.bucket_name WHERE cards.website_user = ?;",
      [userId]
    )) as any;
    res.status(200).json(cardsData);
  } catch (error: any) {
    if (error.statusCode) return next(error);
    else return next(new ErrorHandler("Server Error!", 500));
  }
};

export const createBucket = async (req: any, res: any, next: any) => {
  const body = req.body;
  const bucket_name = body.name as string;
  const email = req.headers.email as string;

  try {
    const [userData] = (await db.execute(
      "SELECT id FROM users WHERE email = ?;",
      [email]
    )) as any;
    const userId = userData[0].id;
    await db.execute(
      "INSERT INTO buckets (website_user, bucket_name) VALUES (?,?);",
      [userId, bucket_name]
    );
    res.status(201).json({ result: "success" });
  } catch (error: any) {
    if (error.statusCode) return next(error);
    else {
      console.log(error);
      return next(new ErrorHandler("Server error!", 500));
    }
  }
};

export const createCard = async (req: any, res: any, next: any) => {
  const email = req.headers.email as string;
  const body = req.body;
  const card_name = body.card_name as string;
  const bucket_name = body.bucket_name as string;
  const link = body.link as string;

  try {
    const [userData] = (await db.execute(
      "SELECT id FROM users WHERE email = ?;",
      [email]
    )) as any;
    const userId = userData[0].id;
    const [bucketData] = (await db.execute(
      "SELECT id FROM buckets WHERE bucket_name = ? AND website_user = ?;",
      [bucket_name, userId]
    )) as any;
    if (bucketData.length === 0)
      throw new ErrorHandler("Invalid bucket name!", 401);
    else if (bucketData.length > 1)
      throw new ErrorHandler("Bucket already exists!", 400);
    const bucketId = bucketData[0].id;
    await db.execute(
      "INSERT INTO cards (website_user, bucket_name, card_name, link) VALUES (?, ?, ?, ?);",
      [userId, bucketId, card_name, link]
    );
    res.status(201).json({ result: "success" });
  } catch (error: any) {
    if (error.statusCode) return next(error);
    else return next(new ErrorHandler("Server error!", 500));
  }
};

export const deleteCardHandler = async (req: any, res: any, next: any) => {
  const cardId = req.headers.id as string;

  try {
    await db.execute("DELETE FROM cards WHERE id = ?;", [cardId]);
    res.status(200).json({ result: "Success" });
  } catch (error: any) {
    if (error.statusCode) return next(error);
    else return next(new ErrorHandler("Server error!", 500));
  }
};

export const deleteMultipleCardsHandler = async (
  req: any,
  res: any,
  next: any
) => {
  let cards = req.headers.cardsarray as string;
  let cardsArray = cards.split(",");

  try {
    cardsArray.forEach(async (card) => {
      if (card) await db.execute("DELETE FROM cards WHERE id = ?;", [card]);
    });
    res.status(200).json({ result: "Success" });
  } catch (error: any) {
    if (error.statusCode) return next(error);
    else return next("Server error!", 500);
  }
};

export const updateCardDetailsHandler = async (
  req: any,
  res: any,
  next: any
) => {
  const body = req.body;
  const cardId = body.cardId as string;
  const card_name = body.name as string;
  const bucket_name = body.bucketName as string;

  try {
    // GET BUCKETDATA FOR BUCKET-ID
    const [bucketData] = (await db.execute(
      "SELECT id FROM buckets WHERE bucket_name = ?;",
      [bucket_name]
    )) as any;
    const bucketId = bucketData[0].id;
    await db.execute(
      "UPDATE cards SET card_name = ?, bucket_name = ? WHERE id = ?;",
      [card_name, bucketId, cardId]
    );
    res.status(200).json({ result: "success" });
  } catch (error: any) {
    if (error.statusCode) return next(error);
    else return next(new ErrorHandler("Server Error!", 500));
  }
};
