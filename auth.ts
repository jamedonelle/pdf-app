import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

import type { NextAuthConfig } from "next-auth"

export const config = {
  secret: process.env.AUTH_SECRET,
  providers: [
    Google({clientId:process.env.AUTH_GOOGLE_ID, clientSecret:process.env.AUTH_GOOGLE_SECRET}),
  ],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname === "/middleware-example") return !!auth
      return true
    },
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)

