'use client';

import Loading from '@/loading';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '~/store/store';

export default function Providers({ children }: Children) {
  return (
    // <SessionProvider>
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
    // </SessionProvider>
  );
}
