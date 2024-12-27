const driverModel = require("../models/driverModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  const jwtKey = process.env.JWT_KEY;

  return jwt.sign({ _id }, jwtKey, { expiresIn: "3d" });
};
const registerUser = async (req, res) => {
  try {
    const { name, email, password, ID } = req.body;

    let user = await driverModel.findOne({ email });

    if (user)
      return res
        .status(400)
        .json({ message: "User with this email already exists..." });

    if (!name || !email || !password || !ID )
      return res.status(400).json({ message: "All fields are required..." });

    if (!validator.isEmail(email))
      return res.status(400).json({ message: "This email is invalid" });

    if (!validator.isStrongPassword(password))
      return res.status(400).json({ message: "This is not a strong password" });

    user = new driverModel({ name, email, password, ID });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = createToken(user._id);

    return res.status(200).json({ _id: user._id, name, email, token });
  } catch (error) {
    console.error(error);

    if (error.name === 'MongoServerError') {
      return res.status(400).json({ message: 'ServerError', error });
    }

    return res.status(500).json({ message: error.message || "Server error" });
  }
};


// --------------------------------------------------------------------------------------------------------

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await driverModel.findOne({ email });

    if (!user)
      return res
        .status(400)
        .json({ message: "this user is not registered yet..." });

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword)
      return res.status(400).json({ message: "this is invalid password" });

    const token = createToken(user._id);

    res.status(200).json({ _id: user._id, name: user.name, email, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
// --------------------------------------------------------------------------------------------------------
const findUser = async (req, res) => {
  const userId = req.params.userId; // get the ID from url

  try {
    let user = await driverModel.findById(userId);

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

// --------------------------------------------------------------------------------------------------------
const findDrivers = async (req, res) => {
  try {
    let drivers = await driverModel.find();

    res.status(200).json(drivers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

module.exports = { registerUser, loginUser, findUser, findDrivers };
