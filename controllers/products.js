const path=require('path');
const rootDir=require('../util/path');
const products = [];

exports.getAddProduct = (req,res,next)=>{
  res.sendFile(path.join(__dirname,'../', 'views', 'add-product.html'));
}

exports.postAddProduct =  (req, res, next) => {
  console.log(req.body);
  res.redirect('/shop');
};

exports.getProducts =  (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
};
