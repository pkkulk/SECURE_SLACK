import { Request, Response, NextFunction, RequestHandler } from "express";
import bcrypt from 'bcrypt';
import User from "../models/User";

export const signup: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    const { fullName, email, password } = req.body;
    try {
        const exist = await User.findOne({ email });
        if (exist) {

        console.log("Email already exists");
            res.status(400).json({ message: "Email already exists" });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ fullName, email, password: hashedPassword });
        await newUser.save();
          console.log("user entered successfully");
        res.status(201).json({ message: 'User registered successfully!' });
        return;
    } catch (error) {

        console.log("server error");
        res.status(500).json({ message: 'Server error', error });
        return;
    }
};

export const login: RequestHandler = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        console.log("user not found");
        res.status(404).json({ message: "User not found" });
        return ;
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
         res.status(400).json({ message: "Invalid credentials" });
         return;
      }
  
      res.status(200).json({ message: "Login successful", user: { fullName: user.fullName, email: user.email } });

      console.log("user login successfully");
      return;
    } catch (error) {

        console.log("server error");
      res.status(500).json({ message: "Server error", error });
      return;
    }
  };