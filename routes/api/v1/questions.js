console.log("im in index");
const express = require("express");
const router = express.Router();
const questions_api = require("../../../controllers/api/v1/questions_api")
var options_api = require("../../../controllers/api/v1/options_api")

// api to create a question
router.post('/create',questions_api.create );

//api to create a option of a question
router.post('/:id/options/create', options_api.create);

//api to delete the question
router.delete('/:id/delete', questions_api.delete);

// api to get all the questions
router.get("/:id",questions_api.getQuestions)
module.exports = router;