const express = require("express");
const product = require("../controllers/contact.controller");
const user = require("../controllers/account.controller");

const router = express.Router();

router.route("/product")
    .get(product.findAll)
    .post(product.create)
    .delete(product.deleteAll);

// router.route("/favorite")
//     .get(product.findAllFavorite);

router.route("/user")
    .get(user.findAll)
    .post(user.create)
    .delete(user.deleteAll);

router.route("/user/:id")
    .get(user.findAll)
    .post(user.create)
    .delete(user.deleteAll);



router.route("/product/:id")
    .get(product.findOne)
    .put(product.update)
    .delete(product.delete);



module.exports = router;