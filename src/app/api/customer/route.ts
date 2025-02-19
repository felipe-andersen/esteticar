import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const obj = req.body;
     
        const { customer_name } =  obj.json();
        res
        if (!customer_name) {
            return res.status(400).json({ error: 'Nome e email são obrigatórios' });
        }

        try {
            const customer = await prisma.customer.create({
                data: { customer_name},
            });
            console.log(customer)
            return res.status(201).json(customer);

        } catch (error: any) {
            return res.status(400).json({ error: 'Erro ao criar cliente', details: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

