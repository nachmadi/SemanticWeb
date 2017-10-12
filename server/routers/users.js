let express =require('express');
let router = express.Router();

let  controllerUsers = require('../controller/userController.js')
let  helperLogin = require('../helper/login.js');

router.post('/login',controllerUsers.getLogin);
router.get('/',controllerUsers.isLogin, helperLogin.isAdmin, controllerUsers.getAllUsers);
router.get('/:id',controllerUsers.isLogin, controllerUsers.getOneUsers);
router.post('/',controllerUsers.isLogin, helperLogin.isAdmin, controllerUsers.createUser);
router.delete('/:id', controllerUsers.isLogin, helperLogin.isAdmin, controllerUsers.deleteUser);
router.put('/:id', controllerUsers.isLogin, controllerUsers.updateUser);

module.exports = router;
