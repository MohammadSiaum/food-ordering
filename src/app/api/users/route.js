import mongoose from "mongoose";
import { User } from "../../../models/User";

export async function GET() {
    mongoose.connect(process.env.MONGO_URL);
    const users = await User.find({ });

    return Response.json(users);
}

export async function DELETE(req) {
    mongoose.connect(process.env.MONGO_URL);
    const url = new URL(req.url);
    const _id = url.searchParams.get('_id');
    await User.deleteOne({_id});
    // console.log(_id)
    return Response.json(true);

}
