import { NextResponse,NextRequest } from 'next/server';
import * as jose from 'jose'


export async function middleware(req: NextRequest, res:NextResponse) {
  try {
    const JWT = req.cookies.get('AT_pat')?.value;
    const redirectUrl = new URL("/login", req.url);
    
    if(!JWT){
      redirectUrl.searchParams.append('warning', "login required");
      return NextResponse.redirect(redirectUrl);
    }
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET,
    )

    try {
      await jose.jwtVerify((JWT as string), secret);
      console.log("jwt valid")
    } catch (error) {
      console.log(error)
      redirectUrl.searchParams.append('warning', "login required");
      return NextResponse.redirect(redirectUrl);
    }

  } catch (error) {
    console.log(error)
    return NextResponse.redirect(new URL("/", req.url));
  }

  const response = NextResponse.next();
  return response

}

export const config = {
  matcher: '/(appointment)',
};