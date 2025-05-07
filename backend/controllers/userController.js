import User from "../models/user.js";
import bcrypt from "bcrypt";

export function createUser(req, res) {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
    role: req.body.role,
  });

  user
    .save()
    .then(() => {
      res.json({
        message: "user saved successfully",
      });
    })
    .catch(() => {
      res.json({
        message: "user not saved",
      });
    });
}

export function loginUser(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }).then((user) => {
    if (user == null) {
      res.status(404).json({
        message: "user not found",
      });
    } else {
      const isPasswordCorrect = bcrypt.compareSync(password, user.password);
      if (isPasswordCorrect) {
        res.json({
          message: "Log in Successfull",
          user: user,
        });
      } else {
        res.status(401).json({
          message: "Password is incorrect",
        });
      }
    }
  });
}
