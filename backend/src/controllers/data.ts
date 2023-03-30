import ErrorHandler from "../Services/ErrorHandler";
import db from "../database/db";

export const getBuckets = async (req: any, res: any, next: any) => {
  const email = req.headers.email;
  try {
    const [userData] = (await db.execute("SELECT id FROM users ;", [
      email,
    ])) as any;
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
    const [userData] = (await db.execute("SELECT id FROM users ;", [
      email,
    ])) as any;
    if (userData.length === 0) throw new ErrorHandler("Invalid email!", 401);
    const userId = userData[0].id;

    const [cardsData] = (await db.execute(
      "SELECT cards.card_name, cards.link, buckets.bucket_name FROM cards INNER JOIN buckets ON buckets.id = cards.bucket_name WHERE cards.website_user = ?;",
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
  const email = req.headers.email;
  const body = req.body;
  const card_name = body.card_name;
  const bucket_name = body.bucket_name;
  const link = body.link;

  try {
    const [userData] = (await db.execute(
      "SELECT id FROM users WHERE email = ?;",
      [email]
    )) as any;
    const userId = userData[0].id;
    const [bucketData] = (await db.execute(
      "SELECT id FROM buckets WHERE bucket_name = ?;",
      [bucket_name]
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
