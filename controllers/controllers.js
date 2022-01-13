const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const {
  signUpValidation,
  loginValidation,
} = require("../validation/validation");

const postSignup = async (req, res) => {
  const { error } = signUpValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).send("Email already Exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassport = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassport,
    dob: req.body.dob,
    phoneNumber: req.body.phoneNumber,
  });

  try {
    await user.save();
    return res.status(200).send(user);
    // return res.status(200).send(user: user._id);
  } catch (err) {
    return res.status(400).send(err);
  }
};

const postLogin = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send("Invalid Password or Email");
  }

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(400).send("Invalid Password or Email");
  }

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res
    .header("auth-token", token)
    .send(
      `<p>Verified: Your token is ${token}</p><p>Account Number is ${Math.floor(
        Math.random() * 99999999999
      )}</p>`
    );
};

const postCreatedAcc = (req, res) => {
  res.json({
    posts: {
      title: "Account Number",
      acctNo: Math.random,
    },
  });
};

const getBalanceByAccNum = (req, res) => {
  res.send("getBalanceByAccNum");
};

const getBalanceByID = (req, res) => {
  res.send("getUserBalanceByID");
};

const getBalance = (req, res) => {
  res.send("getBalance");
};

const postTransfer = (req, res) => {
  res.send("getID");
};

const getTransactionByAccNum = (req, res) => {
  res.send("getTransactionByAccNum");
};

const getTransactionCreditByAccNum = (req, res) => {
  res.send("getTransactionCreditByAccNum");
};

const getTransactionDebitByAccNum = (req, res) => {
  res.send("getTransactionDebitByAccNum");
};

module.exports = {
  postSignup,
  postLogin,
  postCreatedAcc,
  getBalanceByAccNum,
  getBalanceByID,
  getBalance,
  postTransfer,
  getTransactionByAccNum,
  getTransactionCreditByAccNum,
  getTransactionDebitByAccNum,
};
