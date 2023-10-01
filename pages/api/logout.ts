import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("LOGOUT endpoint accessed");
  res.setHeader('Set-Cookie', 'AT_pat=; HttpOnly; Max-Age=0; Path=/; Secure');
  res.redirect('/login');
}
