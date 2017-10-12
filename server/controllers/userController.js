const User = require('../models/User');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
  createUser : (req,res)=>{
               User.create({
                 user_name: req.body.user_name,
                 user_pass: req.body.user_pass,
                 role: req.body.role,
                 salt: req.body.salt
                })
                .then(data=>{
                   res.send(data);
                })
                .catch(err=>{
                  res.send(err);
                })
  },
  getAllUser:(req, res)=> {
               User.find()
               .then(users => {
                  //res.send({students:allStudents});
                  res.send({users:users});
               })
              .catch(err=>{
                res.send(err);
               })
  },
  getOneUser: (req, res)=>{
              var id = req.params._id;
              var o_id = new ObjectId(id);
              var query = {_id:o_id}
              User.findOne(query)
              .then(user => {
                  res.send({user:user});
              })
              .catch(err=>{
                res.send(err);
              })
  },
  getLogin :(req, res)=>{
    console.log(helperUtil.getMd5(req.body.user_pass,"123"));
    models.users.findOne(
      {where: { user_name: req.body.user_name} }
    )
    .then(objUser=>{
        if(helperUtil.getMd5(req.body.user_pass,objUser.salt)===objUser.user_pass){
          jwt.sign({
                      user_id: objUser.user_id,
                      role:objUser.role
                    },
                    process.env.TOKEN,  // modul require('dotenv').config() letak file di root
                    { expiresIn: 60 * 60 },(err,token)=>{
                         if(!err){
                            res.send(token);
                         }else{
                            res.send(err);
                         }
                    });
        }else{
          res.send({info:'Password Salah'});
        }
    })
    .catch(err=>{
        res.send(err.message);
    })
  },
  isLogin:(req,res,next)=>{
      jwt.verify(req.headers.token, process.env.TOKEN, function(err, decoded) {
        if(err){
           res.send(err);
        }else{
          req.body.user_id = {user_name:decoded.user_name,role:decoded.role};
          next();
        }
      });
  }
}
