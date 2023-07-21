var express = require("express");
var router = express.Router();
var userservice = require("../services/user");

router.get("/details", userservice.userdetails);
router.get("/create-admin", userservice.createAdminUser);

module.exports = router;
