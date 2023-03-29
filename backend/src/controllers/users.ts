import { Decrypter, Encrypter } from "../Services/Bcrypt";
import ErrorHandler from "../Services/ErrorHandler";
import TimeStamp from "../Services/TimeStamp";
import db from "../database/db";

export const loginHandler = async (req: any, res: any, next: any) => {
  const body = req.body;
  const email = body.email as string;
  const password = body.password as string;

  try {
    const [userData] = (await db.execute(
      "SELECT user_password, username FROM users WHERE email = ?;",
      [email]
    )) as any;
    if (userData.length == 0)
      throw new ErrorHandler(`Invalid Email: ${email}`, 404);
    const username = userData[0].username;
    const verifiedStatus = await Decrypter(password, userData[0].user_password);
    if (verifiedStatus) return res.status(200).json({ username });
    else return res.status(401).send("Invalid password!");
  } catch (error: any) {
    if (error.statusCode) return next(error);
    return next(new ErrorHandler(error.message, 500));
  }
};

export const signUpHandler = async (req: any, res: any, next: any) => {
  const body = req.body;
  const username = body.name as string;
  const email = body.email as string;
  const password = body.password as string;
  // console.log(body);
  // Password Encryption
  const hashedPassword = await Encrypter(password);
  const timestamp = TimeStamp();

  try {
    await db.execute(
      "INSERT INTO users (username, email, user_password, date_created) VALUES (?,?,?,?)",
      [username, email, hashedPassword, timestamp]
    );
    res.status(201).json({ result: "success" });
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 500));
  }
};
