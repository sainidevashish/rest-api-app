const User = require("../../model/user");
const login = async function (req, res) {
  const { userName, password } = req.body;
//   console.log(req.body);
  const user = await User.findOne({ userName: userName });
  if (user) {
    const result = (password === user.password);
    // console.log(result);
    if (result) {
      res.status(200).json({ msg: "User Login Successfully !", user });
    }else {
    res.status(400).json({ msg: "Password does not match" });
  }}
  else{
    res.status(400).json({ msg: "User does not exist !" });
  }
};
module.exports = login;
