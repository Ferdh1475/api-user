const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  uniqueId: {
    type: String,
    default: function () {
      return new mongoose.Types.ObjectId().toString();
    },
    unique: true,
  },
  walletAddress: {
    type: String,
    default: "",
  },
  walletBalance: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
