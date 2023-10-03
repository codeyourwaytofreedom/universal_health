import { NextResponse,NextRequest } from 'next/server';
import * as jose from 'jose'


export async function middleware(req: NextRequest, res:NextResponse) {
  
  try {
    const controlAccess = async (token:string, secretKey:string | undefined, url:URL) => {
      if (!token) {
        url.searchParams.append('warning', 'login required');
        return NextResponse.redirect(url);
      }

      const secret = new TextEncoder().encode(secretKey);
      try {
        await jose.jwtVerify(token, secret);
        console.log('JWT valid');
      } catch (error) {
        console.log(error);
        url.searchParams.append('warning', 'login required');
        return NextResponse.redirect(url);
      }
    };
    
    const tokenPatient = req.cookies.get('AT_pat')?.value as string;
    const tokenMed = req.cookies.get('AT_med')?.value as string;


    if (req.nextUrl.pathname.startsWith('/appointment')) {
      console.log("Checking for /appointments");
      const redirectUrl = new URL("/", req.url); 
      if(!tokenPatient && tokenMed){
        redirectUrl.searchParams.append('forbidden', 'Not Authorized');
        return NextResponse.redirect(redirectUrl);
      }
      await controlAccess(tokenPatient,process.env.JWT_SECRET_PATIENT,redirectUrl)
    }


    if (req.nextUrl.pathname.startsWith('/mypatients')) {
      console.log("Checking for /mypatients");
      const redirectUrl = new URL("/", req.url); 
      if(!tokenMed && tokenPatient){
        redirectUrl.searchParams.append('forbidden', 'Not Authorized');
        return NextResponse.redirect(redirectUrl);
      }
      await controlAccess(tokenMed,process.env.JWT_SECRET_MED,redirectUrl)
    }

  } catch (error) {
    console.log(error)
    return NextResponse.redirect(new URL("/", req.url));
  }

  const response = NextResponse.next();
  return response

}


