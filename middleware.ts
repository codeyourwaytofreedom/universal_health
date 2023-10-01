import { NextResponse,NextRequest } from 'next/server';


export async function middleware(req: NextRequest, res:NextResponse) {
  try {
    const ID = req.cookies.get('ID')?.value;
    if(!ID){
      const redirectUrl = new URL("/login", req.url);
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