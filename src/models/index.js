const Category = require("./Category");
const Product = require("./Product");
const User = require("./User");


//table product add columb categoryId
Product.belongsTo(Category)
Category.hasMany(Product)