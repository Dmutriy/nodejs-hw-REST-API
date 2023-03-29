const express = require("express");

const ctrl = require("../../controllers/contacts");

const {
  validateBody,
  isValidId,
} = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:id", isValidId, ctrl.getContactById);

router.post(
  "/",
  validateBody(schemas.addSchema),
  ctrl.addContact
);

router.put(
  "/:id",
  validateBody(schemas.addSchema),
  isValidId,
  ctrl.updateContact
);

router.patch(
  "/:id/favorite",
  validateBody(schemas.updateFavoritSchema),
  isValidId,
  ctrl.updateFavorite
);

router.delete("/:id", isValidId, ctrl.removeContact);

module.exports = router;
