import express from "express"
import { db } from "../db.js";



export const getUser = (req,res)=>{
    const q =  
    //req.query.id
 //? 
 "SELECT id, `username`, `email`, `password`,`img` FROM users WHERE id = ? ";
//  : "SELECT id, `username`, `email`, `password`,`img` FROM users ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
}

export const updateUser = (req,res)=>{
    const token = req.cookies.access_token;
if (!token) return res.status(401).json("Not authenticated!");

jwt.verify(token, "jwtkey", (err, userInfo) => {
  if (err) return res.status(403).json("Token is not valid!");

  const userId = req.params.id;
  const q =
    "UPDATE users SET `username`=?,`email`=?,`password`=?,`img`=? WHERE `id` = ? ";

  const values = [req.body.username, req.body.email, req.body.password ];
  console.log('first')
  console.log(values)

  db.query(q, [...values, userId, userInfo.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("User has been updated.");
  });
});
}

// const router = express.Router()

// //TODO

// export default router