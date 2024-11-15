

export interface NewSale {
    name: string
    // alternatePhone: string
    // alternateEmail?: string
    phone?: string
    email?: string
    // address: string
    // city: string
    // state: string
    // zip: string
    // country: string
    // region: string
    idCustomer?: string
    customerType: "registered" | "notRegistered"
    legalesponsibilities?: 'legalEntity' | 'naturalPerson'
    // cpf?: string
    servicesList?: ServiceItemProtocol[]
    // productsList?: ProductsProtocol
    // id: string
    dateTime: Date
    employee: string
    duration: string
    startDateTime: {
        date: string
        time: string
    }
    completionDate: {
        date: Date
        time: string
    }
    saleDetails?: string
    payment: object
    vehicle: {
        model: string
        brand: string
        licensePlate: string
    },
    wasTaxed: boolean,
    discountOnTheTotalAmount: {
        value: string | number
        type: discountTypeProtocol
    },
    tatalPrice_USD: number,
}

export interface payment {
    bankSlip: string
    card: string
    currency: string
}

export interface ServiceItemProtocol {
    item: string
    details: string
    price_USD: string
    discount: {
        value: string | number
        type: discountTypeProtocol
    }
    deadline: {
        durationInMinutes: string
        startDateTime: {
            date: string
            time: string
        }
        // completionDate: {
        //     date: Date
        //     time: string
        // }
    }
    catergory: string
    vehicleArrivalDateTime: {
        date: string
        time: string
    }
    vehicleDeliveryDateTime: {
        date: string
        time: string
    }
}

export interface discountTypeProtocol {
    percent: number
    code: string
    currency: string
}









export interface NewSale {
    name: string
    phone?: string
    email?: string
    idCustomer?: string
    customerType: "registered" | "notRegistered"
    legalesponsibilities?: 'legalEntity' | 'naturalPerson'
    servicesList?: ServiceItemProtocol[]
  
    dateTime: Date
    employee: string
    duration: string
    startDateTime: {
        date: string
        time: string
    }
    completionDate: {
        date: Date
        time: string
    }
    saleDetails?: string
    payment: object
    vehicle: {
        model: string
        brand: string
        licensePlate: string
    },
    wasTaxed: boolean,
    discountOnTheTotalAmount: {
        value: string | number
        type: discountTypeProtocol
    },
    tatalPrice_USD: number,
}

export interface payment {
    bankSlip: string
    card: string
    currency: string
}

export interface ServiceItemProtocol {
    item: string
    details: string
    price_USD: string
    discount: {
        value: string | number
        type: discountTypeProtocol
    }
    deadline: {
        durationInMinutes: string
        startDateTime: {
            date: string
            time: string
        }
       
    }
    catergory: string
    vehicleArrivalDateTime: {
        date: string
        time: string
    }
    vehicleDeliveryDateTime: {
        date: string
        time: string
    }
}

export interface discountTypeProtocol {
    percent: number
    code: string
    currency: string
}


