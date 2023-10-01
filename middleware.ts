import { NextResponse,NextRequest } from 'next/server';


export async function middleware(req: NextRequest, res:NextResponse) {
  try {
    console.log("Middleware working")

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