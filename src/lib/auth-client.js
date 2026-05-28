import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000", // আপনার অ্যাপের বেস ইউআরএল
});

export const { signIn, signUp, useSession } = createAuthClient()