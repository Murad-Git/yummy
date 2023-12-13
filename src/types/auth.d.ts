interface formDataType {
  email?: string;
  password?: string;
}
interface commentForm {
  name?: {
    value: string | '';
  };
  comment: {
    value: string | '';
  };
}
interface AuthTypes {
  [`signUp` | `signIn` | `resetPassword`];
}
