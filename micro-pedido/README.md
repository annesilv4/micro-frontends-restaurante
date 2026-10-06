# Micro Pedido

Aplicação Next.js independente que exibe os pratos adicionados pelo usuário ao pedido. A seleção fica no estado React do componente enquanto ele estiver montado; não há persistência em banco de dados ou armazenamento entre recargas.

## Executar individualmente

Na raiz do repositório:

```bash
cd micro-pedido
npm install
npm run dev
```

Acesse http://localhost:3002. Para build de produção, use `npm run build` e depois `npm run start`.

## Integração com o container

O projeto usa Next.js 15 com Pages Router. A configuração de Module Federation em [`next.config.mjs`](./next.config.mjs) registra o remote `pedido` e expõe o componente `./Order`, consumido pelo container como `pedido/Order`.

O componente [`Order`](./components/Order.js) escuta o evento global `addToOrder` em `window`. Cada evento contém os dados do prato em `event.detail`; o componente os acrescenta ao estado local e mostra os itens. O listener é removido quando o componente é desmontado.

O evento só conecta o cardápio ao pedido quando ambos estão carregados na mesma página — normalmente a página do container em http://localhost:3000. Ao executar o Micro Pedido sozinho, não há outro micro na página para disparar o evento.

Para subir o sistema integrado e entender o fluxo completo, consulte [Container e comunicação entre os micros](../container/README.md).
