const validator = require("../util/UserValidator");

module.exports = (req,res,nxt)=>{
let isValid= validator(req.body);
if(isValid){
    req.valid=true;
    nxt();
}
else{
    res.status(403).send("Regestration data forbidden: not valid data")
}
}