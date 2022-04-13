const createError = require("http-errors");
require('dotenv').config()
const User = require("../models/user.model");
const Image = require("../models/images.models")

const registerCandidate = async ({ name, email, password }) => {
  if (await User.findOne({ email })) {
    throw createError(409, "User already exists");
  }

  await new User({
    name,
    email,
    password,
  }).save();

  return login(email, password);
};

const login = async (email, password) => {
  const user = await User.findOne({
    email,
    password,
  });

  if (!user) {
    throw createError(400, "Invalid credentials");
  }

  const { _id } = user;

  return { user };
};

const get = async () => {
    const image = Image.find()
    return image
}
module.exports={registerCandidate,login, get}