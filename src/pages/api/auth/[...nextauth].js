import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GoogleProvider from 'next-auth/providers/google';
import nodemailer from 'nodemailer';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '~/server/prisma';
/*
const emailServer = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.USER_EMAIL, // Your Gmail email address
    pass: process.env.USER_PASS, // The app password generated in Step 2
  },
});
*/
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
};

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  ...authOptions,
  callbacks: {
    session({ session, token, user }) {
      return session; // The return type will match the one returned in `useSession()`
    },
  },
});
