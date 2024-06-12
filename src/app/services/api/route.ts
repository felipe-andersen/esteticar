
/**
    * que pode ver esse recurso? todos, admim e usuário autenticado
    * quem pode alterar esse recurso? Admim
    * dois tipos de permição de usuário
    * create, delete, update
    * ocultar informações que usuários nao tem permição 
    * 
    * tipos de permissão
    * nomes de variaveis que
 */

// servicesList/categories/
// servicesList/categorias/

interface Permision {
    admim: string
    defaultUser: string
}

interface Service {
    name: string
    type: string
    description: string
    id: string
    value: string
}

interface CategoriesPT_BR {
    lavagem: Service[]
    pintura: Service[]
    categoryLengh: number
    serviceLengh: number
}

const categoriesList = []

export const serviceCategories: CategoriesPT_BR  = {

    lavagem: [
        {   
            name: 'Lavagem ',
            type: 'Lavagem',
            description: 'Lorem ipson',
            id: 'kf748fg78',
            value: 'R$ 0,00',
        },
        {   
            name: 'Lavagem ',
            type: 'Lavagem',
            description: 'Lorem ipson',
            id: 'kf748fg78',
            value: 'R$ 0,00',
        }
    ],

    pintura: [
        {   
            name: 'Lavagem ',
            type: 'Lavagem',
            description: 'Lorem ipson',
            id: 'kf748fg78',
            value: 'R$ 0,00',
        }
    ],

    categoryLengh: 5,

    serviceLengh: 5
}

/*
    PARA FINS DE ESTUDO

    Informações sensíveis não podem ser passadas na URL
    Público não pode saber como a api foi desenvolvida
    Funções de verificação

    https://${baseURL}/services
    https://${baseURL}/services?category=lengh
    https://${baseURL}/services?category=list
    https://${baseURL}/services?service=lengh
    https://${baseURL}/services?service=list

    
*/

export async function GET (req:Request, ) {

    return Response.json({serviceCategories})
    
}

/**
 * 
 * Salvar um conjunto de categorias
 * Salvar um conjunto de serviço
 * 
 * 
 * 
 * 
 * tabelas de categorias de serviços
 * tabela de serviços de cada categoria
 * O sistema começa já começa dando o get na categoria e serviços padrões
 * Pegar e salvar um json no corpo da requisição
 * menos requisição é menor é o trafego
 * requisições pesadas demanda processamento
 * fazer api e atualizar meu storage, offline fist e mobile fist
 * 
 */

export async function POST (req:Request, ) {
    
    return Response.json({req})
    
}

export async function PUT (req:Request, ) {
    
    return Response.json("")
}

export async function DELETE (req:Request, ) {
    
    return Response.json("")
}



