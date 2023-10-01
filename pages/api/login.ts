import type { NextApiRequest, NextApiResponse } from 'next'
import {connectToDatabase,closeDatabaseConnection} from "./db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Login endpoint accessed");

  const patient_credentials = JSON.parse(req.body);
  const username = patient_credentials.username;
  const password = patient_credentials.password;
  
  const client = await connectToDatabase();
  const data_base = client.db('universal-health');
  const patients = data_base.collection('patients');

  const testPatient =  await patients.findOne({username:username});

  console.log(testPatient)

  await closeDatabaseConnection(client);

  res.status(200).json({patient:testPatient?.username});
}
