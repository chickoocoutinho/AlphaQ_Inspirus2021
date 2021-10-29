const {Router} = require("express")
const router = Router();
const userController = require("../controllers/userController");

router.post("/signup", userController.signup);


module.exports = router;