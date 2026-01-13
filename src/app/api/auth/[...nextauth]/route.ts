import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const demoUsername = process.env.NEXTAUTH_DEMO_USER || "admin";
const demoPassword = process.env.NEXTAUTH_DEMO_PASSWORD || "admin123";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.username === demoUsername &&
          credentials?.password === demoPassword
        ) {
          return {
            id: "demo-user",
            name: "Demo User",
            email: "demo@example.com",
          };
        }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/",
  },
  secret: process.env.NEXTAUTH_SECRET || "local-dev-secret",
});

export { handler as GET, handler as POST };

