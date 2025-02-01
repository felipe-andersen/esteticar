// sum.test.js
import { expect, it, test, vi, describe } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react';
import Pricing from '@/layout/templates/pricing/pricing.view';




// import { sum } from './main.view'
// import { Servico } from './services.model'
// import { describe } from 'node:test'

// // testar a chamada de api
// // testar o template
// global.fetch = vi.fn()

// const svc = [
//     {
//         name: "Lavagem simples",
//         price: "40,00 - 50,00",
//         description: "Lorem Ipson ",
//         id: "52fg5gh",
//         type: "Sujeira media",
//         category: "lavagem"
//     },
//     {
//         name: "Lavagem simples",
//         price: "40,00 - 50,00",
//         description: "Lorem Ipson ",
//         id: "52fg5gh",
//         type: "Sujeira pesada",
//         category: "lavagem"
//     },
//     {
//         name: "Lavagem simples",
//         price: "50,00 - 70,00",
//         description: "Lorem Ipson ",
//         id: "j5fff4x3",
//         type: "Sujeira média",
//         category: "lavagem"
//     },
//     {
//         name: "Lavagem simples",
//         price: "50,00 - 70,00",
//         description: "Lorem Ipson ",
//         id: "k2fg54f8",
//         type: "Sujeira pesada",
//         category: "lavagem"
//     },
// ]


  
  // Usando 'typeof' para referenciar o tipo do componente

const Name = () => <div>felipe</div>

describe('Main component', () => {
    it('Deve renderizar componente corretamente', () => {
        render(<Name/>)
        // const mainComponent = screen.getByTestId("main-component")
        // expect(mainComponent).toBeInTheDocument();
        
    });
})

// describe('api test', () => {
//     it('adds 1 + 2 to equal 3', async () => {
//         fetch.mockResolvedValueOnce({
//             status: 200,
//             json: async () => [{ id: 1, title: 'Post mockado' }],
//         });
//         // const mockResponse:Servico[] = svc
//         const data = await fetch('http://localhost:3000/user/services')
//         console.log(data)
//         data.json()
//         // expect(data).toBe(Array)
//     })

    
// })
// // trabalhar com mocks e fazer correspondecia

// // import fetch from 'node-fetch'; // Importa o polyfill do fetch

// const baseURL = 'https://localhost:3000/user'; // Exemplo de API pública

// // describe('Testando API com fetch e Vitest', () => {
// //   it('Deve retornar uma lista de services', async () => {
// //     const response = await fetch(`${baseURL}/services`);
// //     expect(response.status).toBe(200);

// //     const data = await response.json();
// //     expect(data).toBeInstanceOf(Array);
// //     expect(data.length).toBeGreaterThan(0);
// //   });

// // //   it('Deve retornar um post específico', async () => {
// // //     const response = await fetch(`${baseURL}/ser/1`);
// // //     expect(response.status).toBe(200);

// // //     const data = await response.json();
// // //     expect(data).toHaveProperty('id', 1);
// // //     expect(data.title).toBeTypeOf('string');
// // //   });
// // });
