# Micro Cardápio

Aplicação Next.js independente que apresenta uma lista estática de pratos. Cada prato tem nome, descrição, preço e botão para adicioná-lo ao pedido.

## Executar individualmente

Na raiz do repositório:

```bash
cd micro-cardapio
npm install
npm run dev
```

Acesse http://localhost:3001. Para build de produção, use `npm run build` e depois `npm run start`.

## Integração com o container

O projeto usa Next.js 15 com Pages Router. A configuração de Module Federation em [`next.config.mjs`](./next.config.mjs) registra o remote `cardapio` e expõe o componente `./Menu`, consumido pelo container como `cardapio/Menu`.

Ao clicar em **Adicionar ao pedido**, o componente [`Menu`](./components/Menu.js) dispara um evento `CustomEvent` chamado `addToOrder` em `window`, com os dados do prato em `detail`. O Micro Pedido escuta esse evento e atualiza a lista selecionada. Esse fluxo de comunicação acontece na página integrada do container, quando os dois micros estão carregados no mesmo navegador.

Para subir o sistema integrado e entender o fluxo completo, consulte [Container e comunicação entre os micros](../container/README.md).
