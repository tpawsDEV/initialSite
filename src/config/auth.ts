import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        return {
          ...token,
          email: user.email,
          marketing_id: user.marketing_id,
        };
      }
      return token;
    },

    session: ({ session, token, user }) => {
      if (!user) {
        user = {...token};
      }
      if (token && token.email && token.marketing_id) {
        session.user.marketing_id = token.marketing_id as string;
        user.marketing_id = token.marketing_id as string;
      }
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Email",

      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = {
          id: "1",
          name: "J Smith",
          email: "jsmith23@example.com",
          marketing_id: "632af537c77f0ab2861de8e1",
        };
        if (user) {
          return user;
        }
        return null;
      },
    }),
  ],
};
