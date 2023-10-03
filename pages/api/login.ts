import type { NextApiRequest, NextApiResponse } from 'next'
import {connectToDatabase,closeDatabaseConnection} from "./db";
import jwt from 'jsonwebtoken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Login endpoint accessed");

  const user_credentials = JSON.parse(req.body);
  const username = user_credentials.username;
  const password = user_credentials.password;
  const who = user_credentials.who;
  const query = who === "patient" ? "patients" : "meds";
  const tokenName = who === "patient" ? "AT_pat" : "AT_med";
  const JWT_SECRET = who === "patient" ? process.env.JWT_SECRET_PATIENT : process.env.JWT_SECRET_MED;
  const redirectUrl = who === "patient" ? "/appointment" : "/mypatients";

  console.log(user_credentials.who)
  
  try {
    const client = await connectToDatabase();
    const data_base = client.db('universal-health');
    const patients = data_base.collection(query);
  
    const existingPatient =  await patients.findOne({username:username, password:password});

    await closeDatabaseConnection(client);

    if(existingPatient){
      console.log(existingPatient);
      const token = jwt.sign({ patient: existingPatient.username }, (JWT_SECRET as string));
      console.log(token)
      res.setHeader('Set-Cookie', `${tokenName}=${token}; HttpOnly; Max-Age=${60 * 60}; Path=/; Secure`);
      res.status(200).json({url:redirectUrl});
    }else{
      console.log(user_credentials);
      res.status(404).json({message:"User not found"})
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error. Please try again later." });
  }
}
