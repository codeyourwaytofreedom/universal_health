import type { NextApiRequest, NextApiResponse } from 'next'
import {connectToDatabase,closeDatabaseConnection} from "./db";
import jwt from 'jsonwebtoken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Login endpoint accessed");

  const patient_credentials = JSON.parse(req.body);
  const username = patient_credentials.username;
  const password = patient_credentials.password;
  
  try {
    const client = await connectToDatabase();
    const data_base = client.db('universal-health');
    const patients = data_base.collection('patients');
  
    const existingPatient =  await patients.findOne({username:username, password:password});

    await closeDatabaseConnection(client);

    if(existingPatient){
      console.log(existingPatient);
      const token = jwt.sign({ patient: existingPatient.username }, (process.env.JWT_SECRET as string));
      console.log(token)
      res.setHeader('Set-Cookie', `AT_pat=${token}; HttpOnly; Max-Age=${60 * 60}; Path=/; Secure`);
      res.status(200).json({patient:existingPatient?.username});
    }else{
      console.log(patient_credentials);
      res.status(404).json({message:"User not found"})
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error. Please try again later." });
  }

}
