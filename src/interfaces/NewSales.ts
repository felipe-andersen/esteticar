export interface Sale {
    name: string
    // alternatePhone: string
    // alternateEmail?: string
    defaultPhone: string
    defaultEmail?: string
    // address: string
    // city: string
    // state: string
    // zip: string
    // country: string
    // region: string
    idcustomer?: string
    customerType: "registered" | "notRegistered"
    legalesponsibilities: 'legalEntity' | 'naturalPerson'
    // cpf?: string
    servicesList?: ServiceItemProtocol[]
    productsList?: ProductsProtocol
    id: string
    dateTime: Date
    workerUser: string
    duration: string
    startDateTime: {
        date: string
        time: string
    }
    deliveryDate: {
        date: Date
        time: string
    }
    saleDetails?: string
    payment: object
    vehicle: {
        name: string
        model: string
        brand: string
    },
    wasTaxed: boolean,
    discountOnTheTotalAmount: {
        value: string | number
        type: discountTypeProtocol
    },
    finalPrice: number,
}

export interface payment {
    bankSlip: string
    card: string
    currency: string
}

export interface ServiceItemProtocol {
    item: string
    details: string
    price: string
    discount: {
        value: string | number
        type: discountTypeProtocol
    }
    catergory: string
}

export interface discountTypeProtocol {
    percent: number
    code: string
    currency: string
}

export interface ProductsProtocol {

}

