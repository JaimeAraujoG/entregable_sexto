const Cart = require("./Cart");
const Category = require("./Category");
const Product = require("./Product");
const User = require("./User");


//table product add columb categoryId
Product.belongsTo(Category)
Category.hasMany(Product)

//relacion modelo Cart cart- userId
Cart.belongsTo(User)
User.hasMany(Cart)

//relacion modelo cart cart-productId
Cart.belongsTo(Product)
Product.hasMany(Cart)