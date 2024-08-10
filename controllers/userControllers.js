const User = require("../models/User");
exports.getUser = (req, res) => {
  res.render("index", {
    title: "Update User Collections",
  });
};
// exports.storeUserDetails = async (req, res) => {
//   try {
//     res.send('working')
//     const  { walletAddress, walletBalance, uniqueId } = req.body
//     const newUpdate = new User({
//       walletAddress,
//       walletBalance,
//       uniqueId
//     })
//     await newUpdate.save()
//     .then( (res) => {
//       console.log(res)
//     })
//     .catch( (err) => {
//       console.log(err)
//     })
//   } catch (error) {
//     console.log(err)
//   }
// }
exports.updateWalletBalance = async (req, res) => {
  try {
    const { walletBalance } = req.body;
    const id = "66b6a7dcddb3b03fd72aa784";
    const user = await User.findById(id);
    !user && res.status(500).send({ error: "invalid user" });
    user.walletBalance = walletBalance || user.walletBalance;
    await user.save();
    res.status(200).send(`Updated ${user}`);
  } catch (error) {
    res.send(`An error occurred ${error}`);
  }
};
exports.updateWalletAddress = async (req, res) => {
  try {
    const { walletAddress } = req.body;
    const id = "66b6a7dcddb3b03fd72aa784";
    const user = await User.findById(id);
    !user && res.status(500).send({ error: "invalid user" });
    user.walletAddress = walletAddress || user.walletAddress;
    const updatedData = await user.save();
    res.status(200).send(`Updated ${user}`);
  } catch (error) {
    res.send(`An error occurred ${error}`);
  }
};
