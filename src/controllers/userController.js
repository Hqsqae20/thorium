const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ status :true ,msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};

const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};


const updateUser = async function (req, res) {
  let id=req.params.userId
  let data=req.body
  let update =await userModel.findByIdAndUpdate(
    { _id: id},
    { $set: data},
    { new:true}
  )
  res.send({status :true,msg: update})
} 

const deleteuser = async function (req, res) {
  let id=req.params.userId
  let user=await userModel.findOneAndUpdate(
    { _id:id},
    { $set:{isDeleted:true}},
    { new:true}
  )
  let deleted =await userModel.findByIdAndDelete(id)
  res.send({status :true,msg: deleted})

}




module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteuser = deleteuser;
