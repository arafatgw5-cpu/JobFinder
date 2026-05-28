import dns from "node:dns";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

// Google DNS (লোকাল ডেভেলপমেন্টে কানেকশন ইস্যু থাকলে)
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please add your MONGODB_URI to .env.local");
}

let client;

// Next.js ডেভেলপমেন্ট মোডে কানেকশন ক্যাশ করার জন্য
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClient) {
    global._mongoClient = new MongoClient(uri);
    // MongoDB driver নিজে থেকেই কানেকশন ম্যানেজ করে, 
    // তাই সরাসরি connect() await না করলেও চলে, তবে চাইলে করতে পারেন।
  }
  client = global._mongoClient;
} else {
  // প্রোডাকশনে সরাসরি নতুন ক্লায়েন্ট তৈরি হবে
  client = new MongoClient(uri);
}

const db = client.db("auth");

// Better Auth Config
export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  trustedOrigins: [
    "http://localhost:3000",
  ],
});