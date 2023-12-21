// import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';
// import { NextResponse } from 'next/server';
// import { Database } from '~/types/database';

// export async function GET(request: Request) {
//   const requestUrl = new URL(request.url);
//   const code = requestUrl.searchParams.get(`code`);

//   if (code) {
//     const supabase = createRouteHandlerClient<Database>({ cookies });
//     await supabase.auth.exchangeCodeForSession(code);
//   }

//   return NextResponse.redirect(requestUrl.origin);
// }

import { CookieOptions, createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const cookieStore = cookies();
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get(`code`);

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: ``, ...options });
        },
      },
    },
  );
  // if (code) {
  //   const supabase = createRouteHandlerClient<Database>({ cookies });
  //   await supabase.auth.exchangeCodeForSession(code);
  // }

  return NextResponse.redirect(requestUrl.origin);
}
