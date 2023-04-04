import NextAuth, { NextAuthOptions } from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import GitHubProvider from 'next-auth/providers/github';
// import  from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  debug: process.env.NODE_ENV !== `production`,
  theme: {
    logo: `https://next-auth.js.org/img/logo/logo-sm.png`,
    brandColor: `#1786fb`,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);
