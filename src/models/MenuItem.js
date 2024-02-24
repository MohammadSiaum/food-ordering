const { Schema, models, model } = require("mongoose");

const MenuItemSchema = new Schema({
    image: {type : String},
    itemName: {type : String},
    itemDescrip: {type : String},
    itemPrice: {type : Number},



}, {timeseries: true});

export const MenuItem = models?.MenuItem || model('MenuItem', MenuItemSchema);