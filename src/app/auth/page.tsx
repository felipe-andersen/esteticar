
import { LoginSignin } from "@/ui/templates/auth";
import { NextApiRequest, NextApiResponse } from "next";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="flex   flex-col   ">
     
        <LoginSignin/>

    </div>
  );
}




interface User {
  name: string
  lastName?: string
  defaultEmail: string
  password?: string
  phone?: string
  id?: string
}


export async function createUser(user: User) {
  try {
    const response = await fetch("https://localhost/8080", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

