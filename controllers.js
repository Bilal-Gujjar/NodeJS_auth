const fs = require("fs");
const db = require("./db");
const Data = require("./data.json")
const gteMyName = (req, res) => {
  res.status(200).send("Bilal-Gujjar");
};

const readFile = (req, res, next) => {
  fs.readFile("non-existing-file", (err, data) => {
    if (err) {
      next(err);
    } else {
      res.send(data);
    }
  });
};

 

const login = (req, res, next) => {
  const { email, password } = req.body;

  const foundUser = db.findOne({
    email: email,
    password: password,
  });

  if (!foundUser) {
    res.status(404).json({
      message: "User not found!",
    });
  } else {
    res.status(200).json({
      message: "Successfully logged in!",
      users: Data
    });
  }
};

const auth = (req,res)=>{

          let user = Data
          user.push(req.body)
          fs.writeFile('data.json',JSON.stringify(user),(err)=>{
              if(err){
                  console.log(err)
              }
              else{
                  res.send("User added")
              }
          }
          )
      }

module.exports = { gteMyName, readFile, login , auth};
