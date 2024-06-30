const rootDir=require('../util/path');
const path=require('path');
exports.getcontacts=(req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
};

exports.postcontacts=(req, res, next) => {
    res.redirect('/success');
};




