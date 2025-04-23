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

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) res.status(404).json({ message: " User was not found " });

    // compare and see if the password in the DB is equal to the password the user
    // entered
    if (password === user.password) {
      res.status(200).json({ message: " User Logged in ", token: "token " });
    }
    console.log(user);
  } catch (error) {
    console.error(error);
  }
};

// Create Basic Login (route, controller)  "Token"
// Create A form(s) component for taking in a Register and to Login

module.exports = {
  Register,
  Login,
};
