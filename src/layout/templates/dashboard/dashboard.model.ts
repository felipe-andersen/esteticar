'use server'
import { prisma } from "@/lib/prisma/prisma-client";


export default  async function createCustomer(name: string) {
    try {
        const customer = await prisma.customer.create({
            data: {
                customer_name: name
            }
        })
        console.log('created')
    } catch (error: any) {
        console.log(error.message)
        
    } finally {
        await prisma.$disconnect()
        console.log('disconected')
    }
}

export async function findCustomer(){ 

   
}





export const addTeste = async (formData: FormData) => {
  let name = formData.get('nome')
  let email = formData.get('email')
  console.log('Form: ' + name + ' ' + email)
}

// export const addUser = async (
//   prevState: { message: string },
//   formData: FormData
// ) => {
//   let name = formData.get('nome')
//   let email = formData.get('email')
//   let returnMessage

//   console.log(`addUser ${name} ${email}`)

//   const prisma = new PrismaClient()

//   try {
//     await prisma.user.create({
//       data: {
//         name: name ? name.toString() : '',
//         email: email ? email.toString() : ''
//       }
//     })
//     returnMessage = {
//       message: 'Usuário adicionado com sucesso!',
//       type: 'success'
//     }
//   } catch (error) {
//     console.error(error)
//     returnMessage = { message: 'Erro ao adicionar usuário!', type: 'error' }
//   } finally {
//     await prisma.$disconnect()
//     return returnMessage
//   }
// }

/**

Não se engane!
São necessários umas 2000 horas de estudo para se tornar um desenvolverdor júnior. Então se vc caiu de paraqueda na área e acha que em pouco tempo vai deslanchar, só digo uma coisa - pé no chão!
A jornada exige dedicação, consistência e muita prática.

#Desenvolvimento #CarreiraTech #Programação

*/

