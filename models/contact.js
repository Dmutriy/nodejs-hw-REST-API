const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handelMongooseError } = require("../helpers");

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      match:
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
    },
    favorit: {
      type: Boolean,
      default: false,
    },
  },
  { versionKay: false, timestamps: true }
);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const updateFavoritSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

contactSchema.post("save", handelMongooseError);

const schemas = {
  addSchema,
  updateFavoritSchema,
};

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  schemas,
};
