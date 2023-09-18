import { Session, User } from '@supabase/supabase-js';

interface State {
  initial: boolean;
  session: Session | null;
  user: User | null;
  view: 'signIn' | 'signUp' | 'resetPassword';
  // setView,
  // signOut: () => supabase.auth.signOut(),
}
const initialState: State = {
  initial: true,
  session: null,
  user: null,
  view: 'signIn',
};

// export const authSlice = createSlice({
//   name: 'authorization',
//   initialState,
//   reducers: {
//     someFunction() {
//       const doSomething = () => {
//       return 'asdasd'
//       },
//     },
//   },
//   }
// })
