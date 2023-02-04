import { User } from "../models/user.js";
import bcrypt from 'bcryptjs'
import {generateToken} from '../utils.js'
const SALT_ROUNDS = 6

async function signin(req, res) {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
        }
    }
    res.status(401).send({message: 'Invalid email or password'})
}

async function signup(req, res) {
 try{const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, SALT_ROUNDS)
  })
  const user = await newUser.save()
  res.send({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user)
  })}
  catch(err) {
    console.log(err);
  }
}


export { signin, signup }