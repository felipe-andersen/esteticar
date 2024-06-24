import { Worker } from "./main";

export let worker: Worker[] = [
    {
        name: 'Mateus Nascimento',
        role: 'Admim',
        // lastLogin: 'string',
        id: 'fd5f6d5f6d',
        phoneDevice: '+55 21 12345-6789',
        email: 'mateus@gmail.com',
        contract:"CLT",
        profilePicture: "empyt"
    },
]

function request() { 
    const r = new Request("https://example.com", {
        method: "POST",
        body: '{"foo": "bar"}',
    });
}

  

// worker = []