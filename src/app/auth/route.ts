import { NextApiRequest, NextApiResponse } from "next";

/* 

captar a senha, avaliar senha(tamanho correto?, etc.), fazer verificações (ip, token, id, two-step), enviar a senha criptografada para o server, para o servidor guardar ou comparar, esperar o token do servidor, refresh token,
enviar dados



*/


interface User {
    name: string
    lastName?: string
    defaultEmail: string
    password?: string
    phone?: string
    id?: string
}
  
export async function GET (req:Request, ) {

    return Response.json({mensage:"hello!"})
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
  