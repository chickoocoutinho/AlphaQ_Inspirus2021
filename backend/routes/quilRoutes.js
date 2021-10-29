const {Router} = require("express")
const router = Router();
const quilController = require("../controllers/quilController");

router.post("/", quilController.create_algolia_search_instance);
router.get("/", quilController.quil_check);
router.get("/all-notes",quilController.all_notes);

module.exports = router;