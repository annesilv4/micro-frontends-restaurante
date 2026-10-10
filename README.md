# Restaurante com Micro Frontends

Projeto de demonstração de uma aplicação de pedidos dividida em três aplicações Next.js independentes:

- [`container/`](./container/README.md): aplicação principal que integra os micros.
- [`micro-cardapio/`](./micro-cardapio/README.md): lista de pratos e ação para adicioná-los ao pedido.
- [`micro-pedido/`](./micro-pedido/README.md): exibe os pratos escolhidos.

As três aplicações usam Next.js 15 com Pages Router e Webpack Module Federation. As versões de `next`, `webpack` e `@module-federation/nextjs-mf` estão fixadas nos `package.json` e refletidas nos `package-lock.json` de cada app. Para executar a experiência integrada, siga as instruções em [Container e comunicação entre os micros](./container/README.md).

## Requisitos

- Node.js compatível com Next.js 15.
- npm.

## Executar o projeto completo

Abra três terminais na raiz do repositório e inicie cada aplicação em seu próprio diretório:

```bash
cd micro-cardapio
npm ci
npm run dev
```

```bash
cd micro-pedido
npm ci
npm run dev
```

```bash
cd container
npm ci
npm run dev
```

Os comandos devem permanecer em execução em terminais separados:

| Aplicação | Endereço |
|---|---|
| Micro Cardápio | http://localhost:3001 |
| Micro Pedido | http://localhost:3002 |
| Container integrado | http://localhost:3000 |

Abra http://localhost:3000 para usar a aplicação integrada. Os micros devem estar disponíveis nas portas indicadas porque os endereços dos remotes estão configurados no container.

## Comunicação entre os micros

O container carrega `Menu` e `Order` remotamente via Module Federation. Ao clicar em **Adicionar ao pedido**, o Micro Cardápio dispara no `window` um evento `CustomEvent` chamado `addToOrder`, com os dados do prato em `event.detail`. O Micro Pedido escuta esse evento, atualiza seu estado React e mostra o prato selecionado. Ao desmontar, o listener é removido.

Veja o detalhamento, os módulos expostos e instruções para rodar cada aplicação no [README do container](./container/README.md).
