const workers = [
    { name: 'felipe', id:"" }
]

export type Worker_ =  {
    fullName: string   //salvar como todas minusculas / Felipe Sousa
    defaultEmail: string
    rule: string// salvar como todas minusculas
    phone?: string //"+55 21 99999-9999"
    id?: string
    status : string //primeira me maiúscula
    permission: Permission
    contract: string
    birthday: string //YYYY-MM-DD

    salary: string //150.50 decimal com pontos $ padrão
    adress: string
    nativeCountry: string 
    birthplace: string 
    RG: string
    CPF: string // 12345678909
    CTPS: string
    TE: string
    stateProvince: string
    country: string
    city: string
    zipPostcode: string //12345678 

}

type Permission = {
    default: string
    admin: string
}