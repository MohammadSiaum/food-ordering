// import authOptions from '../auth/[...nextauth]/route';
import mongoose from "mongoose";
import { getServerSession } from "next-auth/next";
import { User } from '../../../models/User';
import { authOptions } from "../auth/[...nextauth]/route";

export async function PUT(req) {
    mongoose.connect(process.env.MONGO_URL);
    const data = await req.json();
    console.log('data : ' + data.city);
    const session = await getServerSession(authOptions);
    // console.log({session});
    const email = session?.user?.email

    if (email === data.email) {

        await User.updateOne({email}, data)

    }

    return Response.json(true);
}

export async function GET() {
    mongoose.connect(process.env.MONGO_URL);
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    /* if (!email ) {
        return Response.json({});
    } */
    const user = await User.findOne({email});
    return Response.json(user);

}