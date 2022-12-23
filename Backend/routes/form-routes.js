const express = require("express");
const router = express.Router();
const Form = require("../model/Form");
const formsController = require("../controllers/forms-controller");

router.get("/", formsController.getAllForms);
router.post("/", formsController.addForm);
router.get("/:id", formsController.getById);

module.exports = router;
