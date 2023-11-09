const mongoose = require("mongoose")
const eggSchema = mongoose.Schema({
egg_color: String,
egg_type: String,
egg_price: Number
})
module.exports = mongoose.model("egg",
eggSchema)