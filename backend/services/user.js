const bcrypt = require("bcryptjs");
const UserModel = require("../models/user");

const userdetails = (req, res, next) => {
  res.json({
    success: true,
    message: "successfull",
    user: {
      name: req.user.name,
      type: req.user.type,
      _id: req.user._id,
      emailid: req.user.emailid,
      contact: req.user.contact,
    },
  });
};

const createAdminUser = async (req, res, next) => {
  const name = "mohammed";
  const email = "admin@gmail.com";
  const password = "admin123";
  const contact = "9563152391";
  console.log("juts one");
  try {
    const hashPassword = bcrypt.hash(password);
    await UserModel.create({
      name,
      contact,
      hashPassword,
      emailid: email,
      status: true,
      type: "ADMIN",
    });
    return res.status(201).json({
      message: "Admin user created successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Failed to create admin user.",
    });
  }
};

module.exports = { userdetails, createAdminUser };
