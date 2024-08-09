const express = require("express");
const router = express.Router();
const controllers = require("../controllers/userControllers");
router.get("/users", controllers.getUser);
router.get('/', controllers.storeUserDetails)
router.post(
  "/user/walletBalance/:id",
  controllers.updateWalletBalance
);
router.post(
  "/user/walletAddress/:id",
  controllers.updateWalletAddress
);
module.exports = router;
