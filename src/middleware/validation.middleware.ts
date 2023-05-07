import { Request, Response, Router, RequestHandler, NextFunction } from "express";
import Joi, { ValidationError } from "joi";

function validationMiddleware(schema: Joi.Schema): RequestHandler {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const validateOptions = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true,
    };
    try {
      const value = await schema.validateAsync(req.body, validateOptions);
      req.body = value;
      next();
    } catch (e) {
      if (e instanceof ValidationError) {
        const errors: string[] = [];
        e.details.forEach((error) => {
          errors.push(error.message);
        });
        res.status(400).send(errors);
      }
    }
  };
}

export default validationMiddleware