'use server'
import { prisma } from "@/lib/prisma/prisma-client";
import { ICustormer } from "@/shared/dtos/customer";
import * as p from "@prisma/client";

class CustomerRepository {
    async create(customer: ICustormer) {
        // return prisma.customer.create({data:ICustomer})

    }
}