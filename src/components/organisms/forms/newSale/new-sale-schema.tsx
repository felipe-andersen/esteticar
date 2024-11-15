import { z } from 'zod';


// RxDB schema
export const customerData = {
    version: 1,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            maxLength: 100 
        },
        name: {
            type: 'string'
        },
        celPhone: {
            type: 'string'
        },
        email: {
            type: 'string',
        }
    },
    required: ['id', 'name']
}

// Zod schema
const discountTypeSchema = z.object({
    percent: z.number()
        .min(1, 'min 1')
        .max(100, 'max 100 '),              
    code: z.string()
        .min(1, 'min 1')
        .max(100, 'max 100 '),                  
    currency: z.string()
        .min(1, 'min 1')
        .max(100, 'max 100 '),             
});


const paymentSchema = z.object({
    bankSlip: z.string(),              
    card: z.string(),                
    currency: z.string(),             
});


const serviceItemSchema = z.object({
    item: z.string(),                  
    details: z.string(),               
    price_USD: z.string(),           
    discount: z.object({
        value: z.union([z.string(), z.number()]), 
        type: discountTypeSchema,                 
    }),
    deadline: z.object({
        durationInMinutes: z.string(),    
        startDateTime: z.object({
        date: z.string(),               
        time: z.string(),              
        }),
    }),
    catergory: z.string(),             
    vehicleArrivalDateTime: z.object({
        date: z.string(),                
        time: z.string(),              
    }),
    vehicleDeliveryDateTime: z.object({
        date: z.string(),              
        time: z.string(),                
    }),
});

export const newSaleSchema = z.object({
    name: z
        .string()
        .min(1, 'Minimum 1 characte')
        .max(100, 'Maximum 100 characters'),                
    phone: z
        .string()
        .min(13, 'min 8')
        .max(14, 'max 14 ')
        .optional(),       
    email: z
        .string()
        .email()
        .min(1, "min 1")
        .max(100, "max: 100")
        .optional(),                 
    idCustomer: z.string().optional(),             
    customerType: z.enum(["registered", "notRegistered"]),  
    legalesponsibilities: z.enum(['legalEntity', 'naturalPerson']).optional(),  
    servicesList: z.array(serviceItemSchema).optional(), 
    dateTime: z.instanceof(Date),                   
    employee: z.string(),                           
    duration: z.string(),                          
    startDateTime: z.object({
        date: z.string(),                            
        time: z.string(),                            
    }),
    completionDate: z.object({
        date: z.instanceof(Date),                    
        time: z.string(),                             
    }),
    saleDetails: z
        .string()
        .min(1, "Required: min 1")
        .max(100, "max: 100")
        .optional(),             
    payment: paymentSchema,                         
    vehicle: z.object({
        model: z
            .string()
            .min(1, "Required: min 1")
            .max(100, "max: 100"),                       
        brand: z
            .string()
            .min(1, "Required: min 1")
            .max(100, "max: 100"),                            
        licensePlate: z
            .string()
            .min(1, "Required: min 1")
            .max(100, "max: 100"),                       
    }),
    wasTaxed: z.boolean(),                         
    discountOnTheTotalAmount: z.object({
        value: z.union([z.string(), z.number()]), 
        type: discountTypeSchema,                  
    }),
    tatalPrice_USD: z.number().min(0),            
});
