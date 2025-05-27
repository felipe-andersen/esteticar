'use server'

import { prisma } from "@/lib/prisma/prisma-client"


export const addCustomer = async () => {
  try {
    await prisma.customer.create({
        data: {
            name: "felipe",

        }
    })

  } catch (error) {
    console.error(error)
   
  } finally {
    await prisma.$disconnect()
   
  }
}


