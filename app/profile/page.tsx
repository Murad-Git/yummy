import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ProfilePage } from '~/page/ProfilePage';
import { Database } from '~/types/database';

export default async function Profile() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session?.user) redirect(`/`);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <ProfilePage user={user} session={session} />;
}
