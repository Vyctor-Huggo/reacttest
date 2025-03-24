# 📱 Pokedex App

Uma Pokedex simples construída com **React Native**, **Expo** e **TypeScript**, consumindo a API oficial da PokéAPI. Aqui você pode visualizar uma lista de Pokémons e acessar os detalhes de cada um.

---

## 📦 Tecnologias Utilizadas

- React Native
- Expo
- TypeScript
- React Navigation
- Axios
- PokéAPI

---

## 🚀 Como Rodar o Projeto

### 1️⃣ Pré-requisitos

Certifique-se de ter instalado:

- [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Git

### 2️⃣ Clonando o repositório

```bash
git clone https://github.com/seu-usuario/pokedex-app.git
cd pokedex-app
```

### 3️⃣ Instalando as dependências

```bash
npm install
```

ou, se preferir usar o yarn:

```bash
yarn install
```

### 4️⃣ Rodando a aplicação

Para iniciar o projeto no Expo:

```bash
npm start
```

ou

```bash
expo start
```

Isso abrirá o Expo DevTools no navegador. A partir daí, você pode:

- Apertar `a` para abrir no Android Emulator ou no seu dispositivo Android físico (com o app Expo Go).
- Apertar `w` para rodar no navegador.
- Apertar `i` para rodar no simulador iOS (somente em macOS).

---

## 🎯 Estrutura do Projeto

```plaintext
pokedex-app/
 ├ node_modules/
 ├ src/
 ┃ ├ navigation/
 ┃ ┃ └ types.ts
 ┃ ├ screens/
 ┃ ┃ └ HomeScreen.tsx
 ┃ ├ services/
 ┃ ┃ └ pokemonService.ts
 ├ App.tsx
 ├ package.json
 ├ tsconfig.json
 ├ .gitignore
 ├ README.md
```

---

## 📝 Notas

- Esse projeto utiliza a [PokéAPI](https://pokeapi.co/) para buscar informações sobre Pokémons.
- As imagens dos Pokémons estão sendo puxadas diretamente do repositório de sprites da PokéAPI.

---

## 🤝 Contribuição

Sinta-se livre para abrir issues e pull requests!

---

## 🐱‍🐍 Autor

Feito com ❤️ por Vyctor.

