import { createRxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { customerData as customerDataSchema } from './new-sale-schema';

export async function createDatabase() {
    try {
        const myDatabase = await createRxDatabase({
            name: 'offline-db-estericar',
            storage: getRxStorageDexie()
        });
        myDatabase.addCollections({
            customerData: {
                schema: customerDataSchema
            }
        })
        if(!myDatabase) {
            throw new Error(`Erro: não tenho database`)
        } 
        else {
            console.log("created")
            return myDatabase
        }
    } catch (error) {
        if (error instanceof Error) {
            console.log(error)
        }
    }
   
}

export function getCollections() {
    const foo = createDatabase().then(db => db?.collections)
    console.log

}

// export async function createCustomerData({id, name, celPhone, email} :{id: string, name:string, celPhone?:string, email?:string}) {
//     await (await createDatabase()).customerData.insert({
//         id: id,
//         name: name,
//     });
//     console
// }

// export async function findName() {
//     const data = await (await createDatabase()).customerData.find({
//         selector: {
//             name: {
            
//             }
//         }
//     }).exec()
//     return data
// }
