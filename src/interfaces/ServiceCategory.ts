export interface Service {
    name: string
    type: string
    description: string
    id: string
    price: number
}

export interface CategoriesPT_BR {
    lavagem: Service[]
    pintura: Service[]
    categoryLengh: number
    serviceLengh: number
}

export interface ServiceCategories {
    lavagem: Service[]
    pintura: Service[]
    categoryLengh: number
    serviceLengh: number
}