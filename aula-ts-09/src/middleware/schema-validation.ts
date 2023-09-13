import { NextFunction, Request, Response } from "express";

export function validationSchema(schema: any) {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req.body, { abortEarly: false });
  
      if (error) {
        const errorMessages = error.details.map((e: any) => e.message);
        console.log(errorMessages);
        return res.status(422).send(errorMessages);
      }
  
      next();
    };
  }
  