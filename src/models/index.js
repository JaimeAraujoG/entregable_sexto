const Cart = require("./Cart");
const Category = require("./Category");
const Product = require("./Product");
const Purchase = require("./Purchase");
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

// userID -- purchase
Purchase.belongsTo(User)
User.hasMany(Purchase)

//productId --  purchase

Purchase.belongsTo(Product)
Product.hasMany(Purchase)
