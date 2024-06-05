Este é um projeto [Next.js](https://nextjs.org/) inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Primeiro, execute o servidor de desenvolvimento.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Com Docker

Para rodar o container da aplicação rode os seguintes comandos:

```bash
$ docker build -t app-container . \
docker run -it app-container sh
```

Para executar o container em segundo plano:

```bash
$ docker build -t app-container . \
docker run -d app-container
```

para executar o container em segundo plano.

Consulte a [documentação](https://docs.docker.com/reference/cli/docker/) da CLI do Docker.

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

// crescimento vertical e horizontal
