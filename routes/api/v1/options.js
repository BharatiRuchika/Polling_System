console.log("im in index");
const express = require("express");
const router = express.Router();
var options_api = require("../../../controllers/api/v1/options_api")

// api to add a vote
router.put('/:id/add_vote',options_api.addVote);

// api to delete the option of a question
router.delete("/:id/delete",options_api.delete)

module.exports = router;


