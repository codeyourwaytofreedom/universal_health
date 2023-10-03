import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("LOGOUT endpoint accessed");

  const tokenName = req.cookies.AT_pat ? "AT_pat" : "AT_med";
  
  res.setHeader('Set-Cookie', `${tokenName}=; HttpOnly; Max-Age=0; Path=/; Secure`);
  res.status(200).send('OK');
}
