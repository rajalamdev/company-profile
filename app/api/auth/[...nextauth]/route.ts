// imports
import NextAuth from "next-auth"


// importing providers
import GithubProvider from "next-auth/providers/github"
const handler = NextAuth({
    // pages: {
    //     signIn: "/api/auth/signin"
    // },
    providers: [
        GithubProvider({
            clientId: "Ov23liTq5ltxsE1UIhrK",
            clientSecret: "8522bf00dec53f176c2e214a43c8c47df83cb8df",
        }),
    ],
    callbacks: {
        session({ session, token, user }: any) {
          return session // The return type will match the one returned in `useSession()`
        },
    },
})

export { handler as GET, handler as POST }