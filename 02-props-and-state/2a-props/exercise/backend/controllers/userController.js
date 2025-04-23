const User = require("../models/user");

const Register = async (req, res) => {
  try {
    // Get this User Data From a Form
    const { username, email, password } = req.body;
    //  username/password/email

    const existingUser = await User.findOne({ email });
    if (existingUser)
      res.status(400).json({ message: " Email already exists " });
    // check and see how long the password is
    // mix of characters &#$* [lowercase] [UPPERCASE] - (regex)
    // see if the Username exists
    // input 2 password 1 original 1 to check that the password
    // you want to use.
    const user = await User.create({
      username,
      email,
      // not encrypted yet
      password,
    });

    res.json({ message: "User was Create", data: user });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  Register,
};
