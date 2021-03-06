const router = require("express").Router();
const utils = require("../utils");

const { addOne, edit, remove, getAllByProduct } = require("../controllers/productVariants.controller");
const autoParams = require("../utils/autoParams");

// router.get("/", autoParams, getAll);
router.get("/product_id/:productId", getAllByProduct);

router.post("/", addOne);
// router.post("/bulk", utils.multerUploadInstance.single("file"), bulkUpload);
router.patch("/id/:id", edit);
router.delete("/id/:id", remove);
// router.delete("/all", removeAll);
// router.get("/sample", getSampleFile);

module.exports = router;
