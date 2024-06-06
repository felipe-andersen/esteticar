import { NextApiRequest, NextApiResponse } from "next";


interface User {
    name: string
    lastName?: string
    defaultEmail: string
    password?: string
    phone?: string
    id?: string
}
  
function handler (req:NextApiRequest, res: NextApiResponse<User | string >) {

    if (req.method === "POST") {

      console.log(req.body)

      res.status(200)
      
      
    } else {

      res.status(200).json({name:"felipe", defaultEmail:"felipe"})

    }
}