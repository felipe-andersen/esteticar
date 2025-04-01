import { PrismaClient }  from '@prisma/client';


const url = 'http://localhost:3000/user/services';

export interface Servico {
    name: string;
    price: string;
    description: string;
    id: string;
    type: string;
    category: string;
};
  
export async function fetchServices(): Promise<Servico[]> {
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error('');
    }
    return response.json();
};

const prisma = new PrismaClient();

async function main() {
    //change to reference a table in your schema
    const val = await prisma.user.findMany({
        take: 10,
    });
    console.log(val);
};
  
  main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
    process.exit(1);
});