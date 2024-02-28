const { Schema, models, model } = require("mongoose");

const ExtraPriceSchema = new Schema({
    name: String,
    price: Number,
})

const MenuItemSchema = new Schema({
    image: {type : String},
    itemName: {type : String},
    itemDescrip: {type : String},
    itemPrice: {type : Number},
    sizes: {type: [ExtraPriceSchema]},
    extraIngredientPrices: {type: [ExtraPriceSchema]},
    



}, {timeseries: true});

export const MenuItem = models?.MenuItem || model('MenuItem', MenuItemSchema);