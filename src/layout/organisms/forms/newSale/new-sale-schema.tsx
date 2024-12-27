'use client'
import { duration } from 'moment';
import { z } from 'zod';
// para salvar localmente

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
export const discountTypeSchema = z
    .string()
    .max(4)
    .transform(val => `%${val}`)     




const paymentSchema = z.object({
    bankSlip: z.string(),              
    card: z.string(),                
    currency: z.string(),             
});

const serviceSchema = z.object({
    item: z.union([
        z.string(), 
        z.undefined()
    ]),          
    details: z.union([
        z.string(), 
        z.undefined()
    ]),                   
    price_USD: z.union([
        z.string(), 
        z.undefined()
    ]),       
    discount: z.union([
        z.object({
            value: z.union([
                z.string(), 
                z.undefined()
            ]), 
            type: discountTypeSchema,                 
        }), 
        z.undefined()
    ]),
    duration: z.union([
        z.string(), 
        z.undefined()
    ]),          
    // deadline: z.object({
    //     durationInMinutes: z.string(),    
    //     startDateTime: z.object({
    //         date: z.string(),               
    //         time: z.string(),              
    //     }),
    // }),
    // serviceDuration: z.string(),
    scheduledDate:z.union([
        z.coerce.date(),
        z.undefined()
    ]),          
    scheduledTime: z.union([
        z.string()
            .time()
            .max(6)
            .min(5), 
        z.undefined()
    ]),          
    deliveryDate: z.union([
        z.coerce.date(),
        z.undefined()
    ]),          
    deliveryTime:z.union([
        z.string()
            .time()
            .max(6)
            .min(5), 
        z.undefined()
    ]),          
    catergory: z.union([
        z.string(), 
        z.undefined()
    ]),      
    // vehicleArrivalDateTime: z.object({
    //     date: z.string(),                
    //     time: z.string(),              
    // }),
    // vehicleDeliveryDateTime: z.object({
    //     date: z.string(),              
    //     time: z.string(),                
    // }),
});


// table

const totalPriceBRL = z
    .string()
    .min(1)
    .max(30)
    .transform((value) => {
        const cleanedValue = value.replace(/[^\d]/g, "");
        const numericValue = parseFloat(cleanedValue) / 100;
        return numericValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    })
    
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
    // date: z.coerce
    //     .date()
    //     .min(new Date("1900-01-01"), { message: "Too old"})
    //     .max(new Date("2150-01-01"), { message: "" }),
    // time: z
    //     .string()
    //     .time(),    
    // dollar: z
    //     .number()
    //     .positive()
    //     .min(0, { message: "O valor deve ser maior ou igual a 0." }) // Valida valores positivos
    //     .transform((val) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
    //     .format(val)),// Formata como moeda
    discount: z
        .string()
        .max(4)
        .transform(val => `%${val}`),
        // .positive(),
        // .string()
        // .max(3)
        // .regex(/[^0-9]/g),
        // .transform((val, ctx) => {
        //     const number = val.replace(/[^0-9]/g, ""); 
        //     const parsed = parseInt(number)
        //     return parsed
        //     // if (parsed) {
        //     //     const isOK = numberInRange0to100(parsed)
        //     //     if (isOK === false) {
        //     //         ctx.addIssue({
        //     //             code: z.ZodIssueCode.custom,
        //     //             message: "Not valid",
        //     //         })
        //     //         return parsed
        //     //     } else {
        //     //         ctx.addIssue({
        //     //             code: z.ZodIssueCode.custom,
        //     //             message: "Valid",
        //     //         })
        //     //         return parsed
        //     //     }
        //     // } else {
        //     //     return '0'
        //     // }
        // }),
    customerType: z.enum(["registered", "notRegistered"]),  
    legalesponsibilities: z
        .enum(['legalEntity', 'naturalPerson'])
        .optional(),  
    servicesList: z
        .array(serviceSchema)
        .optional(),
    // dateTime: z.instanceof(Date),                   
    employee: z.string(),                           
    // serviceDuration: z.string(),
    // scheduledDate: z.coerce.date(),
    // scheduledTime:  z
    //     .string()
    //     .time()
    //     .max(6)
    //     .min(5),
    // deliveryDate: z.coerce.date(),
    // deliveryTime: z
    //     .string()
    //     .time()
    //     .max(6)
    //     .min(5),
    saleDetails: z
        .string()
        .min(1, "Required: min 1")
        .max(100, "max: 100")
        .optional(),             
    payment: z.array(paymentSchema),                         
    vehicle: z.object({
        model: z
            .string()
            .min(1, "Required: min 1")
            .max(100, "max: 100"),                       
        make: z
            .string()
            .min(1, "Required: min 1")
            .max(100, "max: 100"),                            
        licensePlate: z
            .string()
            .min(1, "Required: min 1")
            .max(100, "max: 100"),                       
    }),
    // wasTaxed: z.boolean(),                         
    discountOnTheTotalAmount: z.object({
        value: z.union([z.string(), z.number()]), 
        type: discountTypeSchema,                  
    }),
    totalPriceBRL: z
    .string()
    .min(1)
    .max(30)
    .transform((value) => {
        const cleanedValue = value.replace(/[^\d]/g, "");
        const numericValue = parseFloat(cleanedValue) / 100;
        return numericValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }),
});

const vehicle = {
    id: "v00123", // Identificador do veículo
    make: "Toyota", // Marca do veículo
    model: "Corolla", // Modelo do veículo
    // year: 2022, 
    licensePlate: "ABC-1234" // Placa do veículo
} //


const sale = {
    id: '566565',
    customerName: "Felipe",
    customerPhone: "+5521966428712", // Primary Key (PK)
    customerEmail: "felipe@felipe.com",
    customerCPF: "250.265.365-78", // Primary Key (PK)
    customerCNPJ: '', // Primary Key (PK)
    saleDetails: "Details",
    paymentDetails: [],
    totalDiscount: {
        percentage: 0,
        discountCode: "DESC10",
    },
    totalPriceUSD: '1,000.00',
    legalResponsibility: "naturalPerson",
    responsibleEmployee: "Jonh",
    customerStatus: "notRegistered",
};

const saleDiscount = {
    saleId: '566565',
    percentage: 0,
    discountCode: "DESC10",
}

const serveiceDiscount = {
    saleId: '566565',
    percentage: 0,
    discountCode: "DESC10",
    contextID: "566565",  // service | product | total
    valueUSD: "1,000.00"
}

const order = {
    saleId: '',
    orderID: '',
    serviceName: '', 
    paymentStatus: 'pending', // 'paid', 'pending' 
    notes: 'Lorem Ipsum',
    vehicleId: 'myr6s37g',
    durationInMinutes: "525.600", // Tempo de duração máximo 
    serviceId: '', 
    scheduledAt: null,
    deliveredAt: '2025-05-08T00:00:00Z', // ISO 8601: yyyy-MM-ddTHH:mm:ssZ
    serviceStatus: 'completed', // completed, delivered, pending, in-progress, canceled
    remainingBalance: {
        value: 400.00,
        currency: "BRL" 
    }
};

const unregisteredClient = {
    id: null, 
    name: "Guest",
    email: "", 
    phone: "", 
    address: "", 
    registered: false, 
    orders: [], 
    createdAt: new Date().toISOString(),
};

const registeredClient = {
    id: "c12345",
    name: "João Silva", 
    email: "joao.silva@example.com",
    phone: "+55 11 98765-4321", 
    address: {
        street: "Rua das Flores",
        number: 123, 
        complement: "Apto 45", 
        district: "Jardins", 
        city: "São Paulo", 
        state: "SP",
        region: '',
        zipCode: "01234-567",
        country: "Brasil" 
    },
    isRegistered: true, 
    // orders: [
    //     {
    //         orderId: "o98765", 
    //         datetime: "2024-12-18T15:30:00Z", 
    //         totalAmount: 149.90, 
    //         currency: "BRL", 
    //         items: [
    //             {
    //                 itemId: "p001",
    //                 name: "Produto A",
    //                 quantity: 2,
    //                 price: 49.95,
    //                 discount: 5,
    //                 discountCode: 'kfjdf'
    //             },
    //             {
    //                 itemId: "p002",
    //                 name: "Produto B",
    //                 quantity: 1,
    //                 price: 50.00
    //             }
    //         ], // Lista de itens no pedido
    //         status: "delivered" // Status do pedido: delivered, pending, canceled
    //     }
    // ], 
    // preferences: {
    //     marketingConsent: true, 
    // }, 
    createdAt: "2022-05-20T10:00:00Z", 
    updatedAt: "2024-12-18T12:45:00Z", // Última atualização das informações do cliente
};



// o que é um págamento programado?

// a vista ou personalizado

const payment = {
    id: "pd001", 
    // customerID:"",
    saleID: '',
    valueBRL: 100.00, 
    datatime: '',
    // currency: "BRL",
    paymentMethod:"", // card, pix, dinherio/ deposito e boleto
}


const service = {
    name: "AutoClean Pro",
    description: "Serviço completo de lavagem e detalhamento automotivo.",
    type: '',
    id: "pd001", 
    priceRangeBRL: '40,00 - 50,00',
    category: 'lavagem'
}


const refund = {
    refundId: "REF123456789", // Identificador único do reembolso
    customerId: "CUST987654321", // ID do cliente que solicitou o reembolso
    orderId: "ORD654321987", // ID do pedido relacionado ao reembolso
    amount: 50.00, // Valor do reembolso
    // currency: "USD", // Moeda do reembolso
    reason: "Produto com defeito", // Razão para o reembolso
    // status: "Pending", // Status do reembolso: Pending, Approved, Denied, Processed
    requestedAt: new Date().toISOString(), // Data e hora da solicitação
    // processedAt: null, // Data e hora em que o reembolso foi processado (null enquanto estiver pendente)
} 

const address = {
    
}

const settings = {
    businessName: "Lava Jato Premium",
    contact: {
      phone: "+55 11 98765-4321",
      email: "contato@lavajatopremium.com",
      address: "Rua das Flores, 123, São Paulo, SP",
    },
    // services: [
    //   { name: "Lavagem Simples", price: 30 },
    //   { name: "Lavagem Completa", price: 50 },
    //   { name: "Polimento", price: 100 },
    //   { name: "Higienização Interna", price: 80 },
    // ],
    operatingHours: {
      weekdays: "08:00 - 18:00",
      saturday: "08:00 - 14:00",
      sunday: "Fechado",
    },
    // features: {
    //   hasWaitingArea: true,
    //   offersCoffee: true,
    //   acceptsCreditCard: true,
    // },
    // discounts: {
    //   loyaltyProgram: {
    //     enabled: true,
    //     description: "A cada 5 lavagens completas, ganhe uma lavagem simples grátis.",
    //   },
    // },
  };

  const settings_ = {
    businessInfo: {
      name: "Lava Jato Premium",
      slogan: "Seu carro brilhando como novo!",
      contact: {
        phone: "+55 11 98765-4321",
        email: "contato@lavajatopremium.com",
        address: "Rua das Flores, 123, São Paulo, SP",
        mapLink: "https://maps.google.com/?q=Lava+Jato+Premium",
      },
      socialMedia: {
        instagram: "https://instagram.com/lavajatopremium",
        facebook: "https://facebook.com/lavajatopremium",
        whatsapp: "https://wa.me/5511987654321",
      },
    },
    services: [
      {
        name: "Lavagem Simples",
        description: "Limpeza externa com shampoo automotivo e secagem manual.",
        price: 30,
        estimatedTime: "30 minutos",
        applicableVehicles: ["Carro pequeno", "Carro médio"],
      },
      {
        name: "Lavagem Completa",
        description: "Limpeza completa interna e externa com acabamento premium.",
        price: 50,
        estimatedTime: "1 hora",
        applicableVehicles: ["Carro pequeno", "Carro médio", "SUV"],
      },
      {
        name: "Polimento",
        description: "Remoção de arranhões superficiais e brilho espelhado.",
        price: 100,
        estimatedTime: "2 horas",
        applicableVehicles: ["Carro pequeno", "Carro médio", "SUV", "Caminhonete"],
      },
      {
        name: "Higienização Interna",
        description: "Limpeza profunda de bancos, carpetes e superfícies internas.",
        price: 80,
        estimatedTime: "1 hora e 30 minutos",
        applicableVehicles: ["Todos"],
      },
    ],
    operatingHours: {
      mondayToFriday: {
        open: "08:00",
        close: "18:00",
      },
      saturday: {
        open: "08:00",
        close: "14:00",
      },
      sunday: {
        open: null,
        close: null, // Fechado
      },
      holidays: {
        message: "Horário especial sob consulta.",
      },
    },
    features: {
      hasWaitingArea: true,
      offersCoffee: true,
      offersWiFi: true,
      acceptsCreditCard: true,
      acceptsPix: true,
      parkingAvailable: true,
    },
    pricingDetails: {
      currency: "BRL",
      taxIncluded: true,
      additionalFees: [
        {
          condition: "Veículos extremamente sujos",
          fee: 20,
        },
        {
          condition: "Serviços em caminhonetes ou veículos grandes",
          fee: 30,
        },
      ],
    },
    discountsAndPromotions: {
      loyaltyProgram: {
        enabled: true,
        description: "A cada 5 lavagens completas, ganhe uma lavagem simples grátis.",
      },
      firstVisitDiscount: {
        enabled: true,
        discountPercentage: 10,
        description: "10% de desconto na sua primeira visita!",
      },
      seasonalPromotions: [
        {
          name: "Promoção de Férias",
          startDate: "2024-01-01",
          endDate: "2024-01-31",
          discountPercentage: 15,
          applicableServices: ["Lavagem Completa", "Polimento"],
        },
      ],
    },
    vehicleCategories: [
      "Carro pequeno",
      "Carro médio",
      "SUV",
      "Caminhonete",
      "Moto",
    ],
    systemIntegrations: {
      paymentGateways: ["PagSeguro", "MercadoPago"],
      schedulingSystem: "AgendamentoOnlinePro",
      CRM: "ClienteFácil",
    },
    notifications: {
      enableEmailNotifications: true,
      enableSmsNotifications: true,
      enableWhatsAppNotifications: true,
      reminders: {
        serviceConfirmation: "Enviado 1 dia antes do agendamento.",
        loyaltyProgramReminder: "Enviado após a quarta lavagem.",
      },
    },
  };

  
  const userPermissions = {
    roles: [
      {
        name: "Admin",
        description: "Usuário com acesso total ao sistema.",
        permissions: [
          "manage_users",
          "view_reports",
          "edit_services",
          "configure_system",
          "view_financial_data",
          "approve_discounts",
        ],
      },
      {
        name: "Funcionário",
        description: "Usuário responsável pela execução dos serviços.",
        permissions: [
          "view_services",
          "update_service_status",
          "view_schedule",
        ],
      },
      {
        name: "Cliente",
        description: "Usuário final que utiliza os serviços do lava-jato.",
        permissions: [
          "book_service",
          "view_own_schedule",
          "view_own_loyalty_points",
          "receive_notifications",
        ],
      },
    ],
    defaultRole: "Cliente", // Função atribuída por padrão a novos usuários
    permissionsList: {
      manage_users: "Gerenciar contas de usuários.",
      view_reports: "Visualizar relatórios de desempenho e financeiros.",
      edit_services: "Adicionar, editar ou excluir serviços disponíveis.",
      configure_system: "Alterar configurações gerais do sistema.",
      view_financial_data: "Acessar dados financeiros como faturamento.",
      approve_discounts: "Aprovar promoções e descontos.",
      view_services: "Visualizar os serviços disponíveis para execução.",
      update_service_status: "Alterar o status de serviços (ex.: 'Em Andamento').",
      view_schedule: "Visualizar a agenda de serviços.",
      book_service: "Reservar serviços do lava-jato.",
      view_own_schedule: "Visualizar a agenda de serviços do próprio usuário.",
      view_own_loyalty_points: "Verificar pontos acumulados no programa de fidelidade.",
      receive_notifications: "Receber notificações por e-mail ou WhatsApp.",
    },
  };
  

const employees = [
    {
    id: 1,
    name: "João Silva",
    email:"",
    phone: "",
    birthDate: "",
    CTPS:"",
    acount:"",
    pix:'',
    RG:"",
    CPF: '',
    position: "Atendente",
    salaryBRL: 2500.0, // Em BRL
    employmentType: "CLT", // ou "Freelancer"
    hireDate: "2023-01-15",
    permissions: ["view_services", "update_service_status", "view_schedule"], // Relacionado ao sistema de permissões
    status: "Ativo", // ou "Inativo"
    workSchedule: ""
    },
];

  
const admins = [
    {
        id: 1,
        name: "Carlos Ferreira",
        role: "Administrador Geral",
        contact: {
        phone: "+55 11 91234-5678",
        email: "carlos.ferreira@lavajatopremium.com",
        },
        accessLevel: "Full", // Nível de acesso: Full, Parcial
        permissions: [
        "manage_users",
        "view_reports",
        "edit_services",
        "configure_system",
        "view_financial_data",
        "approve_discounts",
        ],
        activityLog: [
        {
            date: "2024-12-01",
            action: "Adicionou um novo funcionário",
            details: "João Silva foi adicionado como Atendente",
        },
        {
            date: "2024-12-10",
            action: "Alterou preços de serviços",
            details: "Lavagem Completa ajustada para R$ 60,00",
        },
        ],
        status: "Ativo", // ou "Inativo"
        createdAt: "2023-01-10",
        lastLogin: "2024-12-20 09:45",
        notes: "Responsável pelo gerenciamento financeiro e promoções.",
    },
];
  

const workSchedule = {
    // weekdays: "08:00 - 18:00",
    sunday: "Day off",
    monday: "08:00 - 18:00",
    tuesday:"08:00 - 18:00",
    wednesday: "08:00 - 18:00",
    Thursday: "08:00 - 18:00",
    friday: "08:00 - 18:00",
    saturday: "08:00 - 14:00",
}