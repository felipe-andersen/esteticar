import { PrismaClient } from '@prisma/client';
import logger from '../pino';

export const prisma = new PrismaClient();

async function ping() {
    try {
      await prisma.$queryRaw`SELECT 1`
      logger.error('Ping realizado com sucesso!')
    } catch (err) {
        logger.error('Erro ao pingar o banco:', err)
    } finally {
      await prisma.$disconnect()
    }
  }

setInterval(() => {
    ping()
}, 8.64e+7)