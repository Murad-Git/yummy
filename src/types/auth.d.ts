interface formDataType {
  email: string;
  password?: string;
}
interface AuthTypes {
  ['signUp' | 'signIn' | 'resetPassword'];
}
