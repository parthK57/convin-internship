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
    res.status(200).send(cardsData);
  } catch (error: any) {
    if (error.statusCode) return next(error);
    else return next(new ErrorHandler("Server Error!", 500));
  }
};
