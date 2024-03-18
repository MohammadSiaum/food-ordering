import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { User } from "../../../models/User";
// import { User } from "../../../models/User";

export async function POST(req) {
    const body = await req.json();
    mongoose.connect(process.env.MONGO_URL);
    const pass = body.password;

    const notHashedPass = pass;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(notHashedPass, salt);
    body.password = hashedPassword;

    const createdUser =  await User.create(body)
    return Response.json(createdUser);
}