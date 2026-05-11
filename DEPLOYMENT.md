# Celsius Herbs — Guia de Deploy

> Astro 5 · Shopify Headless · Cloudflare Pages

---

## Índice

1. [Pré-requisitos](#1-pré-requisitos)
2. [Variáveis de Ambiente](#2-variáveis-de-ambiente)
3. [Configuração do Build](#3-configuração-do-build)
4. [Deploy via Cloudflare Dashboard (recomendado)](#4-deploy-via-cloudflare-dashboard-recomendado)
5. [Deploy via Wrangler CLI](#5-deploy-via-wrangler-cli)
6. [Verificação pós-deploy](#6-verificação-pós-deploy)
7. [Solução de Problemas Comuns](#7-solução-de-problemas-comuns)

---

## 1. Pré-requisitos

| Requisito | Versão mínima |
|---|---|
| Node.js | 18.x |
| npm | 9.x |
| Wrangler CLI | 3.x (`npm i -g wrangler`) |
| Conta Cloudflare | com Pages habilitado |
| App Shopify (Headless) | Storefront API ativada |

---

## 2. Variáveis de Ambiente

### 2.1 Variáveis obrigatórias

| Variável | Tipo | Descrição |
|---|---|---|
| `PUBLIC_SHOPIFY_STORE_DOMAIN` | Público | Domínio da loja, ex: `sua-loja.myshopify.com` |
| `PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN` | **Secret** | Token da Storefront API do Shopify |

### 2.2 Variáveis opcionais

| Variável | Padrão | Descrição |
|---|---|---|
| `PUBLIC_SHOPIFY_API_VERSION` | `2026-01` | Versão da Storefront API |
| `VITE_SUPABASE_URL` | — | URL do projeto Supabase (se usado) |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | — | Chave pública do Supabase (se usado) |

### 2.3 Arquivo `.env` local (desenvolvimento)

Crie o arquivo `.env` na raiz do projeto com base no `.env.example`:

```bash
cp .env.example .env
```

Preencha com os valores reais:

```env
PUBLIC_SHOPIFY_STORE_DOMAIN=sua-loja.myshopify.com
PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=seu_token_aqui

# Opcional
# PUBLIC_SHOPIFY_API_VERSION=2026-01
# VITE_SUPABASE_URL=https://seu-projeto.supabase.co
# VITE_SUPABASE_PUBLISHABLE_KEY=sua_chave_publica
```

> **Onde obter o token do Shopify:**
> Shopify Admin → Apps → Develop apps → [Selecione ou crie o app] →
> API credentials → Storefront API access token → copie o token gerado.

> ⚠️ **NUNCA commite o arquivo `.env` com valores reais.** Ele já está no `.gitignore`.
> O `PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN` deve ser cadastrado como **Secret**
> no painel da Cloudflare (veja seção 4.3).

---

## 3. Configuração do Build

### 3.1 Comando de build

```bash
npm run build
```

Internamente executa: `ASTRO_TELEMETRY_DISABLED=1 astro build`

### 3.2 Diretório de saída

```
./dist
```

### 3.3 Modo de output (SSR)

O projeto usa `output: "server"` via adaptador `@astrojs/cloudflare`.
Confirme que o `astro.config.mjs` contém:

```js
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "server",        // ← obrigatório para SSR no Edge
  adapter: cloudflare(),
  integrations: [react()],
  // ...
});
```

### 3.4 `wrangler.toml` (referência)

```toml
name                    = "celsius-herbs"
pages_build_output_dir  = "./dist"
compatibility_date      = "2024-09-23"
compatibility_flags     = ["nodejs_compat"]

[vars]
PUBLIC_SHOPIFY_STORE_DOMAIN = "sua-loja.myshopify.com"
# PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN → configurar como Secret no painel
```

---

## 4. Deploy via Cloudflare Dashboard (recomendado)

### Passo 1 — Conectar repositório

1. Acesse [dash.cloudflare.com](https://dash.cloudflare.com)
2. Menu lateral → **Workers & Pages** → **Create application**
3. Aba **Pages** → **Connect to Git**
4. Autorize o acesso ao GitHub/GitLab e selecione o repositório `celsius-herbs`

### Passo 2 — Configurar o build

Na tela **Set up builds and deployments**, preencha:

| Campo | Valor |
|---|---|
| **Framework preset** | `Astro` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (raiz do repositório) |
| **Node.js version** | `18` (ou superior) |

### Passo 3 — Configurar variáveis de ambiente

Ainda na tela de configuração, expanda **Environment variables (advanced)**:

| Variável | Tipo | Valor |
|---|---|---|
| `PUBLIC_SHOPIFY_STORE_DOMAIN` | Plain text | `sua-loja.myshopify.com` |
| `PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN` | **Encrypt (Secret)** | `seu_token_aqui` |
| `NODE_VERSION` | Plain text | `18` |

> Repita para os ambientes **Production** e **Preview** conforme necessário.

### Passo 4 — Salvar e fazer deploy

1. Clique em **Save and Deploy**
2. Aguarde o build (aprox. 2–4 minutos)
3. Acesse a URL gerada: `https://celsius-herbs.pages.dev`

### Passo 5 — Domínio customizado (opcional)

1. **Workers & Pages** → `celsius-herbs` → **Custom domains**
2. Clique em **Set up a custom domain**
3. Insira o domínio (ex: `celsiusherbs.com`) e siga as instruções de DNS

---

## 5. Deploy via Wrangler CLI

Use este método para deploys manuais ou pipelines de CI/CD sem integração Git.

### Passo 1 — Autenticar na Cloudflare

```bash
wrangler login
```

### Passo 2 — Instalar dependências e fazer o build

```bash
npm install
npm run build
```

### Passo 3 — Publicar no Cloudflare Pages

```bash
wrangler pages deploy ./dist --project-name celsius-herbs
```

### Passo 4 — Configurar Secrets via CLI

As variáveis do tipo Secret não ficam no `wrangler.toml`. Configure-as via CLI:

```bash
# Para produção
wrangler pages secret put PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN \
  --project-name celsius-herbs
# → o terminal pedirá o valor (não fica visível no histórico)

# Para preview (branch de staging)
wrangler pages secret put PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN \
  --project-name celsius-herbs \
  --env preview
```

---

## 6. Verificação pós-deploy

Após o deploy, valide os seguintes pontos:

- [ ] Página inicial (`/`) carrega sem erros no console
- [ ] Pelo menos um PDP (`/folliculitis-shampoo`) exibe produto e preço do Shopify
- [ ] Botão **Add to Bag** adiciona item ao carrinho (verify no CartDrawer)
- [ ] Botão **Checkout** redireciona para `checkout.shopify.com/...`
- [ ] Página `/cart` lista os itens corretamente
- [ ] Variantes de produto (Full Size / Bundle) mostram preços distintos
- [ ] Bundle marcado como `Out of stock` quando `availableForSale: false`

---

## 7. Solução de Problemas Comuns

### Build falha com erro de módulo Node.js

**Sintoma:** `Error: Cannot find module 'crypto'` ou similar.

**Solução:** Confirme que o `wrangler.toml` contém:
```toml
compatibility_flags = ["nodejs_compat"]
```

---

### Carrinho não persiste entre páginas

**Sintoma:** Items somem ao navegar.

**Causa:** O `shopify_cart_id` no `localStorage` foi perdido ou está inválido.

**Solução:** Abra o DevTools → Application → Local Storage e verifique se a chave `shopify_cart_id` existe com um valor no formato `gid://shopify/Cart/...`.

---

### Preços aparecem como `—` ou valor de fallback

**Sintoma:** Botões de variante mostram `$0.00` ou o preço hardcoded em vez do preço real.

**Causa:** A chamada `getProduct()` falhou — provavelmente token ou domínio incorretos.

**Solução:**
1. Confirme `PUBLIC_SHOPIFY_STORE_DOMAIN` e `PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN` no painel da Cloudflare
2. Verifique se o app Shopify tem o escopo `unauthenticated_read_product_listings` ativo

---

### Deploy rejeitado por tamanho de bundle

**Sintoma:** `Error: Script size exceeds limit`.

**Solução:** Verifique se as imagens estão em `/public` (assets estáticos) e não importadas como módulos JS em componentes SSR.

---

### Página 404 em rotas dinâmicas após deploy

**Sintoma:** Rotas como `/folliculitis-shampoo` retornam 404 no Cloudflare mas funcionam localmente.

**Solução:** Confirme que o `output` está como `"server"` no `astro.config.mjs` — sem SSR, as rotas não são geradas como Functions.

---

*Última atualização: 11/05/2026*
