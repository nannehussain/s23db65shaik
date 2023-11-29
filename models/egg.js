const mongoose = require("mongoose")
const eggSchema = mongoose.Schema({
egg_color: String,
egg_type: String,
egg_price: {
    type: Number,
    min: 1,
    max: 450
  }
})
module.exports = mongoose.model("egg",
eggSchema)