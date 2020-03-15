// Member.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Member
let Product = new Schema({
  ProductName: {
    type: String
  },
  ProductBio: {
    type: String
  },
  Price: {
    type: Number
  }
},{
    collection: 'Product'
});

module.exports = mongoose.model('Product', Product);