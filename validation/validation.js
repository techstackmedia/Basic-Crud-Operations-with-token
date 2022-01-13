const Joi = require("joi");

const signUpValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    dob: Joi.string().required(),
    email: Joi.string().min(3).email().required(),
    phoneNumber: Joi.string()
      .length(11)
      .pattern(/^[0-9]+$/)
      .required(),
    password: Joi.string().min(3).required(),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = {
    email: Joi.string().min(3).email(),
    password: Joi.string().min(6).required(),
  };

  return Joi.validate(data, schema);
};

module.exports = {
  signUpValidation,
  loginValidation,
};