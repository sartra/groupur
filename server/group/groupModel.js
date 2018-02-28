const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const groupSchema = new Schema({
    group_id: { type: Number, required: false, unique: true },
    product_name: { type: String, required: false, unique: true },
    min_amt: { type: Number, required: false, default: 25 },
    discount_amt: { type: Number, required: false, default: 0.05 },
    orig_price: { type: Number, required: false, default: 100 },
    members: [{username: String, amount: Number}]
});


const Group = mongoose.model('group', groupSchema);

module.exports = Group;
