# Container e comunicação entre os micros

O container é a aplicação principal do projeto. Ele importa os componentes remotos do Micro Cardápio e do Micro Pedido usando Webpack Module Federation e os renderiza com `React.lazy` e `Suspense`.

## Executar

O Micro Cardápio e o Micro Pedido precisam estar rodando antes do container, respectivamente nas portas 3001 e 3002.

Em terminais separados, execute a partir da raiz do repositório:

```bash
cd micro-cardapio
npm install
npm run dev
```

```bash
cd micro-pedido
npm install
npm run dev
```

```bash
cd container
npm install
npm run dev
```

Abra http://localhost:3000. Para gerar e executar builds de produção, use `npm run build` e, em seguida, `npm run start` em cada aplicação, mantendo cada uma em seu terminal.

## Integração por Module Federation

Em [`next.config.mjs`](./next.config.mjs), o container declara dois remotes:

| Nome do remote | Origem | Módulo importado |
|---|---|---|
| `cardapio` | `http://localhost:3001/_next/static/{chunks\|ssr}/remoteEntry.js` | `cardapio/Menu` |
| `pedido` | `http://localhost:3002/_next/static/{chunks\|ssr}/remoteEntry.js` | `pedido/Order` |

As aplicações remotas expõem seus componentes em `./Menu` e `./Order`. A página principal importa esses módulos com `React.lazy` e os envolve em `Suspense` para exibir um conteúdo de carregamento enquanto são obtidos.

## Comunicação entre cardápio e pedido

Os micros não dependem de importações diretas entre si nem de um backend para compartilhar a seleção. O navegador serve como canal de eventos:

1. Ao clicar em **Adicionar ao pedido**, o Micro Cardápio dispara `new CustomEvent("addToOrder", { detail: dish })` em `window`.
2. O Micro Pedido registra um listener para `addToOrder` e inclui `event.detail` no estado local do pedido.
3. O React renderiza os pratos selecionados. O listener é removido quando o componente é desmontado.

Esse canal funciona quando os dois componentes estão na mesma página do container, pois compartilham o mesmo `window`. Executar cada micro separadamente permite visualizar sua página independente, mas não integra os dois nem compartilha eventos entre abas.

## Aplicações individuais

- [Micro Cardápio](../micro-cardapio/README.md)
- [Micro Pedido](../micro-pedido/README.md)
- [Visão geral do projeto](../README.md)
