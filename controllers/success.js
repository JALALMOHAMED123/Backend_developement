
const path=require('path');
exports.getsuccess=(req, res) => {
    res.send(
        '<h4>Form successfuly filled</h4><a href="http://localhost:4000/contactus"><button>back</button></a>'
    );
};