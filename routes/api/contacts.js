const express = require("express");

const router = express.Router();

const { contacts: opera } = require("../../operations");

router.get("/", opera.getAll);

router.get("/:contactId", opera.getById);

router.post("/", opera.add);

router.delete("/:contactId", opera.removeById);

router.put("/:contactId", opera.updateById);

// router.use((req, res) => {
//     res.status(505).json({
//         message: "Not found"
//     });
// })

module.exports = router;
