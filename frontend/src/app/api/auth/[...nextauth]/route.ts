import { Account } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOPtions = {
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID as string,
            clientSecret: process.env.CLIENT_SECRET as string,
            authorization: {
                params: {
                    scope: "openid email profile https://www.googleapis.com/auth/calendar",
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, account }: { token: JWT; account?: Account | null }) {
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token }: { session: any; token: JWT }) {
            session.accessToken = token.accessToken
            return session;
        }
    }
}

const handler = NextAuth(authOPtions)
export { handler as GET, handler as POST }