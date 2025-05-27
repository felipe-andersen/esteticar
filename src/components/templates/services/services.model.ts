import { PrismaClient }  from '@prisma/client';


const prices = {
    BRL: {
      defaultPrice: 199.90,
      range: {
        min: 99.90,
        max: 499.90
      },
      symbol: 'R$'
    },
    USD: {
      defaultPrice: 39.90,
      range: {
        min: 19.90,
        max: 99.90
      },
      symbol: '$'
    },
    EUR: {
      defaultPrice: 34.90,
      range: {
        min: 17.90,
        max: 89.90
      },
      symbol: '€'
    }
  }
  