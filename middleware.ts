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

    const redirectUrlLogin = new URL("/login", req.url); 
    const redirectUrlHome = new URL("/", req.url); 

    if (req.nextUrl.pathname.startsWith('/appointment')) {
      console.log("Checking for /appointments");
      if(!tokenPatient && tokenMed){
        redirectUrlHome.searchParams.append('forbidden', 'Not Authorized');
        return NextResponse.redirect(redirectUrlHome);
      }
      if(!tokenPatient && !tokenMed){
        return NextResponse.redirect(redirectUrlLogin);
      }
      await controlAccess(tokenPatient,process.env.JWT_SECRET_PATIENT,redirectUrlLogin)
    }


    if (req.nextUrl.pathname.startsWith('/mypatients')) {
      console.log("Checking for /mypatients");
      if(!tokenMed && tokenPatient){
        redirectUrlHome.searchParams.append('forbidden', 'Not Authorized');
        return NextResponse.redirect(redirectUrlHome);
      }
      if(!tokenPatient && !tokenMed){
        return NextResponse.redirect(redirectUrlLogin);
      }
      await controlAccess(tokenMed,process.env.JWT_SECRET_MED,redirectUrlLogin)
    }

  } catch (error) {
    console.log(error)
    return NextResponse.redirect(new URL("/", req.url));
  }

  const response = NextResponse.next();
  return response

}


