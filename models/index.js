// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const seedTags = require('../seeds/tag-seeds');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', //Is this right?
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id' //Is this right?
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'product_tags',
  foreignKey: 'product_id'//Is this right?
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'tagged-products',
  foreignKey: 'tag_id'// Is this right?
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
