const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function register(req,res){
    const user = new User(req.body);
    await user
        .save()
        .then((result)=>{
            res.status(201).json(result)
        })
        .catch(error => {
            res.status(400).send({ error: 'User registration failed' });
        });        
}

async function login(req, res) {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({ email,password });
        if (!user) {
            return res.status(404).send({ error: 'Invalid email or password' });
          }
          const token = jwt.sign(
            {id:user._id,name:user.email,role:user.role},
            process.env.JWT_SECRET,
            {expiresIn:'1h'}
          )
          res.status(200).json({"token":token})
    }catch (error) {
        res.status(400).send(error);
      }
}
module.exports = { register, login };