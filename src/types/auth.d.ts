interface formDataType {
  email?: string;
  password?: string;
}
interface commentForm {
  comment: {
    value: string | '';
  };
}
interface AuthTypes {
  ['signUp' | 'signIn' | 'resetPassword'];
}
