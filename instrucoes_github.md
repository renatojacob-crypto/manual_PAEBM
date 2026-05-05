# Guia: Como colocar seu site no GitHub (Para Iniciantes)

Este guia foi feito especialmente para quem nunca usou o GitHub. Siga estes passos para que qualquer pessoa possa acessar seus manuais pela internet!

## Passo 1: Criar uma conta no GitHub
1. Vá para [github.com](https://github.com/) e clique em **Sign up**.
2. Siga as instruções para criar sua conta gratuita.

## Passo 2: Criar um "Repositório"
Um repositório é como uma pasta do seu projeto que fica na nuvem.
1. No seu perfil, clique no botão **+** (no topo à direita) e escolha **New repository**.
2. No campo **Repository name**, digite `manual-paebm`.
3. Deixe como **Public**.
4. Clique no botão verde **Create repository**.

## Passo 3: Enviar seus arquivos (O jeito mais fácil)
1. Na página que abriu, clique no link que diz **uploading an existing file**.
2. **Importante:** Você pode arrastar a **pasta inteira** `manual_PAEBM` ou selecionar as pastas `assets` junto com os arquivos.
3. **DICA PARA PASTAS:** O GitHub não aceita pastas vazias. Se as pastas `images` ou `pdfs` estiverem vazias no seu computador, elas não aparecerão no site. 
   - Coloque pelo menos um arquivo dentro de cada uma (mesmo que seja um arquivo de texto qualquer) antes de arrastar para o GitHub.
4. Arraste tudo para dentro do navegador.
5. No campo "Commit changes", escreva: `Primeira versão do site com pastas`.
6. Clique no botão verde **Commit changes**.

## Passo 4: Ativar o site (GitHub Pages)
Agora vamos fazer o GitHub transformar esses arquivos em um site real.
1. No topo da página do seu repositório, clique em **Settings** (Configurações).
2. No menu da esquerda, clique em **Pages**.
3. Em "Build and deployment", na parte de "Branch", mude de `None` para `main`.
4. Clique em **Save**.
5. Espere cerca de 1 a 2 minutos. Um link como `https://seu-usuario.github.io/manual-paebm/` aparecerá no topo dessa página. **Esse é o seu site oficial!**

---

## Como usar no PWA Builder para gerar o APK
1. Acesse [pwabuilder.com](https://www.pwabuilder.com/).
2. Copie o link do seu site que o GitHub criou (o link do Passo 4).
3. Cole no site do PWA Builder e clique em **Start**.
4. Ele vai analisar o seu site (que eu já configurei com `manifest.json` e `sw.js`).
5. Clique em **Build & Download** e escolha a opção **Android**. Siga as instruções deles para baixar o arquivo que será instalado no celular.

> [!TIP]
> Lembre-se de colocar as imagens das montagens na pasta `assets/images` e os PDFs na pasta `assets/pdfs` antes de enviar para o GitHub, para que tudo funcione corretamente!
