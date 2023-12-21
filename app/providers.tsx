'use client';

import Loading from '@/loading';
import {
  createClientComponentClient,
  type Session,
} from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AuthProvider } from '~/components/auth/AuthProvider';
import { persistor, store } from '~/store/store';
import { Database } from '~/types/database';

export default function Providers({ children }: Children) {
  const [userSession, setUserSession] = useState<Session | null>(null);
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    const getUserData = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUserSession(session);
    };
    getUserData();
  }, []);

  const accessToken = userSession?.access_token || null;
  return (
    <Provider store={store}>
      <AuthProvider accessToken={accessToken}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          {children}
        </PersistGate>
      </AuthProvider>
    </Provider>
  );
}
