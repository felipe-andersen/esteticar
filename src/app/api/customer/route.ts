import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import * as customerSchema from "@/shared/schemas/customer";
import { NextResponse } from 'next/server';
import logger from '@/lib/pino';


const prisma = new PrismaClient();

type IBody = {
    name: string
}

export async function POST(req: Request) {

    function isRequestBodyValid(obj: any): obj is { name: string } {
        return (
            typeof obj === 'object' &&
            obj !== null &&
            typeof obj.name === 'string'
        )
    }

    if (req.method !== 'POST') {
        // res.setHeader('Allow', ['POST']);
        // res.status(405).end(`Method ${req.method} Not Allowed`);
    } else {
        const body = await req.json();

        if(!isRequestBodyValid(body)) {
            return new Response('Invalid request body', { status: 400 });
        } 

        const data: IBody = body;
        
        const { name } = data;

        if (!name) {
            return new Response('Invalid or non-existent name', {
            })
        }
        
        if(customerSchema.name.safeParse(name).success! === false) { 
            return new Response('Invalid data', {})
        } 

        const newCustomer = {
            name: name
        }

        try {
            const customer = await prisma.customer.create({
                data: newCustomer
            })
            return new NextResponse(
                "Customer created", {status: 201}
            )
        } catch (error: any) {
            return new NextResponse(
                "Could not create customer", {status: 500}
            )
            logger.error(error)
        }
    }
}

type ICustomer = {
    email: String
    cpf: string
    cnpj: string
}

export async function GET (req: Request) {
    if (req.method != 'GET') {
        return new NextResponse('Invalid method', {status: 400})
    } else {
        const body = await req.json()
        const data: ICustomer = body
    }


    try {
        // const customer = prisma.customer.findUnique({
        //     where: {
        //         OR: [
        //           { phone: "idOuName" },
        //           { cpf: "idOuName" },
        //           { cnpj: "idOuName" },
        //         ]
        //     }
        // })

    } catch (error: any) {
        return new NextResponse("Not found", {status: 500})
        logger.error(error)
    }
}



