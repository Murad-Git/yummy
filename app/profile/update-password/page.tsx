import { UpdatePass } from '~/components/auth/UpdatePass';

interface Props {
  params: { string: string[] };
  searchParams: { code: string };
}

export default async function UpdatePassword(request: Props) {
  // console.log(request.searchParams.code);
  // const requestUrl = new URL(request.url);
  // console.log(requestUrl);

  // const code = requestUrl.searchParams.get('code')
  // const code = request.searchParams.code;
  // console.log(code);
  // // try {
  // if (code) {
  //   const supabase = createServerActionClient({ cookies });
  //   console.log(supabase);
  //   const session = await supabase.auth.exchangeCodeForSession(code);
  //   console.log(session);
  // } else return <p>Auth session was not retrieved</p>;
  // } catch (error) {
  //   return <p>Your token has been expired</p>;
  // }
  return <UpdatePass />;
}
