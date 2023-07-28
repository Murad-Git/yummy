import { getServerSession } from 'next-auth';
import React from 'react';
import ProfileInfo from '~/components/profile/ProfileInfo';
import ProfilePage from '~/components/profile/ProfilePage';
import { authOptions } from '~/pages/api/auth/[...nextauth]';

export default async function PlanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  {/* @ts-expect-error Server Component */}
  return <ProfilePage session={session}> {children}</ProfilePage>;
}
