import * as z from "zod"

export const SignupValidation = z.object({
    name:z.string().min(2,{message:"name must be greator tha 2 char"}),
    username: z.string().min(2, {message:"username must be greator than 8 chars"}),
    email:z.string().email(),
    password:z.string().min(8,{message:"password must be atleast 8 chars"})
  })

export const SigninValidation = z.object({
    email:z.string().email(),
    password:z.string().min(8,{message:"password must be atleast 8 chars"})
  })

  export const ProfileValidation = z.object({
    file: z.custom<File[]>(),
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    username: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email(),
    bio: z.string(),
  });
  
  export const PostValidation = z.object({
    caption: z.string().min(5, { message: "Minimum 5 characters." }).max(2200, { message: "Maximum 2,200 caracters" }),
    file: z.custom<File[]>(),
    location: z.string().min(1, { message: "This field is required" }).max(1000, { message: "Maximum 1000 characters." }),
    tags: z.string(),
  });  