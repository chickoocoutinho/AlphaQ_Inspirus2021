const {Router} = require("express")
const router = Router();
const scrapperController = require("../controllers/scrapperController");

router.get("/", scrapperController.scrap);


module.exports = router;