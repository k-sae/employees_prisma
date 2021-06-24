import { PrismaClient } from './prisma/client1'
import { PrismaClient as NApiPrismaClient } from './prisma/nclient'
const prisma = new PrismaClient()
const nApiPrisma = new NApiPrismaClient()

// A `main` function so that you can use async/await
async function main() {


  console.time('prisma')
  for (let index = 0; index < 2000; index++) {
    const employees = await prisma.employees.findMany({
      take: 100
    })
  }
  console.timeEnd('prisma')

  console.time('nApiPrisma')
  for (let index = 0; index < 2000; index++) {
    const employees = await nApiPrisma.employees.findMany({
      take: 100
    })
  }
  console.timeEnd('nApiPrisma')
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
