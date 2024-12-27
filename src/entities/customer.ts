import Dexie, { type EntityTable } from 'dexie';

interface UnregisteredCustomer {
    name: string
    phone: number
    email: string
    cpf?: string
};

const db = new Dexie('EsteticarDB') as Dexie & {
    unregisteredCustomer: EntityTable<UnregisteredCustomer, 'phone'>
    registeredCustomer: EntityTable<UnregisteredCustomer, 'phone'>
    registeredVehicles: EntityTable<UnregisteredCustomer, 'phone'>
    services: EntityTable<UnregisteredCustomer, 'phone'>
    newSale: EntityTable<UnregisteredCustomer, 'phone'>
    employers: EntityTable<UnregisteredCustomer, 'phone'>
    coutyard: EntityTable<UnregisteredCustomer, 'phone'>
    roleandpermissions: EntityTable<UnregisteredCustomer, 'phone'>
    
};

// Schema declaration:
db.version(1).stores({
    unregisteredCustomer: '++phone, name', // primary key "phone" (for the runtime!)
    registeredCustomer: '',
    registeredVehicles: '',
    registeredServices: '',
    newSale: '',
});

export type { UnregisteredCustomer }
export { db }

