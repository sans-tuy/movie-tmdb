import NextAuth, { CredentialsSignin } from "next-auth";
import type { Provider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";
import google from "next-auth/providers/google";
import { connectToMongoDB } from "./app/lib/db";
import User from "./app/models/user";

class InvalidLoginError extends CredentialsSignin {
  code = "Invalid identifier or password";
}

const providers: Provider[] = [
  google({
    clientId: process.env.AUTH_GOOGLE_ID,
    clientSecret: process.env.AUTH_GOOGLE_SECRET,
    authorization: {
      params: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code",
      },
    },
  }),
  Credentials({
    // static login, need to be connect db for login
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" },
    },
    async authorize(c) {
      await connectToMongoDB();
      const user = await User.findOne({
        email: c?.email,
        password: c?.password,
      });
      if (!user) {
        throw new InvalidLoginError();
      }
      return {
        id: user._id,
        name: user.name || "user unnamed",
        email: user.email,
        image: "https://source.boringavatars.com/marble/120",
      };
    },
  }),
];

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: process.env.NODE_ENV !== "production" ? true : false,
  providers,
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
    verifyRequest: "/auth/login",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;

      // Allows callback URLs on the same origin
      if (new URL(url).origin === baseUrl) return url;

      return baseUrl;
    },
    signIn: async ({ user, credentials }) => {
      if (user) {
        // check is using oauth strategy instead of credential
        if (!credentials) {
          const userAlreadyExist = await User.findOne({
            email: user?.email,
          });
          // create user if not exist on db
          if (!userAlreadyExist) {
            const newUser = await User.create({
              email: user?.email,
              provider: "google",
            });
            await newUser.save();
          }
        }
        return true;
      }
      return false;
    },
  },
});
