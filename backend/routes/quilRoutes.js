const {Router} = require("express")
const router = Router();
const quilController = require("../controllers/quilController");

router.post("/", quilController.create_algolia_search_instance);

module.exports = router;