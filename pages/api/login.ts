import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Login endpoint accessed");
  res.status(200).send("working")
}
