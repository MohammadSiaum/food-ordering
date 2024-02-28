import mongoose from "mongoose";
import { MenuItem } from "../../../models/MenuItem";

export async function POST(req) {
    mongoose.connect(process.env.MONGO_URL);
    const data = await req.json();
    // console.log(data);
    const menuItemDoc =  MenuItem.create(data)

    return Response.json(menuItemDoc);
}

export async function PUT(req) {
    mongoose.connect(process.env.MONGO_URL);
    const {_id, ...data} = await req.json();
    await MenuItem.findByIdAndUpdate(_id, data);

    return Response.json(true);

}


export async function GET() {
    mongoose.connect(process.env.MONGO_URL);
    const result = await MenuItem.find();

    return Response.json(result);

}

export async function DELETE(req) {
    mongoose.connect(process.env.MONGO_URL);
    const url = new URL(req.url);
    console.log(url);
    const _id = url.searchParams.get('_id');
    console.log(_id);
    await MenuItem.deleteOne({_id});

    return Response.json(true);


}