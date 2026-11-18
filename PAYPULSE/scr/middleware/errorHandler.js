import { ZodError } from "zod";

export class AppError extends Error{
    constructor(message,statusCode=500,details=null){
        super(message);
        this.name="AppError";
        this.statusCode=statusCode;
        this.details=details
    }
}

export const errorHandler=(err,req,res,next)=>{
    if (err instanceof ZodError){
        return res.status(404).json({erros:err.issues});
              
    }
    if (err instanceof AppError){
        return res.status(err.status).json({message:err.message})
    }
    console.error(err);
    return res.status(500).json({message:"internal server error"})

};
