import { AdapterUser } from 'next-auth/adapters';
import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
        email: string;
        marketing_id: string;
    } & DefaultSession['user']
  }
}