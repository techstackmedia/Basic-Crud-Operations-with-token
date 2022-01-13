const Joi = require("joi");

const signUpValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    dob: Joi.string().required(),
    email: Joi.string().min(3).email().required(),
    phoneNumber: Joi.string()
      .min(6)
      .max(15)
      .pattern(/^[0-9]+$/)
      .required(),
    password: Joi.string().min(3).required(),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(3).email().required(),
    password: Joi.string().min(3).required(),
  });

  return schema.validate(data);
};

module.exports = {
  signUpValidation,
  loginValidation,
};
