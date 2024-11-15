

interface work {
    admim: string
    defaultUser: string
}

/**
 * crud
 * salvar primeiro no localstorage
 * 
 * 
 * 
 */

export interface Worker {
    fullName: string
    defaultEmail: string
    rule: string
    phone?: string
    id?: string
    status : string
    permission: string
    contract: string
    birthday: string
    salary: string
    adress: string
    // nativeCountry: string
    // birthplace: string
    docs_ptBR: string
    RG: string
    CPF: string
    CTPS: string
    TE: string
    stateProvince: string
    country: string
    city: string
    zipPostcode: string

}



export async function GET (req:Request, ) {

    return Response.json("")
    
}

export async function POST (req:Request, ) {
    
    return Response.json({req})
    
}

export async function PUT (req:Request, ) {
    
    return Response.json("")
}

export async function DELETE (req:Request, ) {
    
    return Response.json("")
}


























