
import { User } from "../models/User";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../libs/mongoConnect";

export const authOptions = {

    secret: process.env.SECRET,
    adapter: MongoDBAdapter(clientPromise),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      CredentialsProvider({
        name: "Credentials",
        id: 'credentials', 
        credentials: {
          email: { label: "Email", type: "email", placeholder: "siam@gmail.com"},
          password: { label: "Password", type: "password" }
          
        },
        async authorize(credentials, req) {
          const email = credentials?.email;
          const password = credentials?.password;
          // console.log(credentials);
  
          mongoose.connect(process.env.MONGO_URL);
          const user = await User.findOne({email});
          const passwordOK = user && bcrypt.compareSync(password, user.password);
          
          console.log(passwordOK);
          // console.log(user);
          // console.log(user);
          if (passwordOK) {
            // console.log(user, 'auth');
            return user;
          }
  
          return null;
        },
      }),
    ],
  }