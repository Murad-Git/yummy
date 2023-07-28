import { NextApiRequest } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '~/pages/api/auth/[...nextauth]';

export async function GET(Request: NextApiRequest) {
  const session = await getServerSession(authOptions);
  if (session) {
    // Signed in
    console.log('Session', JSON.stringify(session, null, 2));
    return new Response('Welcome authenticated user', {
      status: 200,
    });
  } else {
    // Not Signed in
    return new Response('Unauthorized access detected', {
      status: 401,
    });
  }
}
