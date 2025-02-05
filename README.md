# 📚 Digital Library - Lizmann

[![Deploy no Vercel](https://img.shields.io/badge/Vercel-Digital--Library-blue)](https://digital-library-lizmann.vercel.app/)  

**Digital Library** é um sistema para gerenciamento de bibliotecas, permitindo **listagem, adição, edição e remoção de livros** de forma intuitiva e eficiente. O projeto foi desenvolvido utilizando **React** no front-end e se comunica com um back-end via **API REST**.  

## 🚀 Tecnologias  

O projeto foi desenvolvido com as seguintes tecnologias e bibliotecas:  

### **Front-end**  

- **React** – Biblioteca para construção da interface do usuário  
- **React Router DOM** – Gerenciamento de rotas para navegação  
- **React Hook Form** – Manipulação de formulários de forma otimizada  
- **Axios** – Cliente HTTP para comunicação com a API  
- **Lucide-react** – Biblioteca de ícones modernos  
- **TailwindCSS** – Framework para estilização rápida e responsiva  

### **Back-end**  

> 🔹 O front-end se comunica com um **back-end RESTful**, responsável por armazenar e gerenciar os dados da biblioteca.
Repositório do Back-end: https://github.com/iagoliziero/server-lizmann

## 🎯 Funcionalidades  

✅ **Listagem de livros** disponíveis na biblioteca  
✅ **Adicionar** novos livros ao catálogo  
✅ **Excluir** livros do sistema  
✅ **Navegação** entre páginas de forma dinâmica  

## ⚙️ Hooks Utilizados  

O projeto utiliza **React Hooks** para gerenciamento de estado e controle de efeitos colaterais:  

- **useState** – Controle de estados internos (formulários, carregamento, etc.)  
- **useEffect** – Efeitos colaterais como chamadas à API  
- **useNavigate** – Redirecionamento entre páginas  
- **useForm (React Hook Form)** – Manipulação otimizada de formulários  

## 📂 Estrutura do Projeto  

```plaintext
📦 LIBRARY
├── 📂 dist
├── 📂 node_modules
├── 📂 public
│   ├── bg-lizmann.png
│   ├── Logo-lizmann.png
│   ├── vite.svg
├── 📂 src
│   ├── 📂 assets
│   ├── 📂 components
│   │   ├── AddBookCard.jsx
│   │   ├── ButtonNav.jsx
│   │   ├── DivForm.jsx
│   │   ├── DropDownMenu.jsx
│   │   ├── FormH2.jsx
│   │   ├── HeaderBiblioteca.jsx
│   │   ├── HeaderBooks.jsx
│   │   ├── TitleH2.jsx
│   ├── 📂 pages
│   │   ├── AddBooks.jsx
│   │   ├── Biblioteca.jsx
│   │   ├── Home.jsx
│   ├── 📂 services
│   │   ├── api.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
```

## 🔗 Comunicação com a API (Back-end)  

O arquivo `api.js` dentro da pasta **services** é responsável pela comunicação com a API. O **Axios** é utilizado para realizar requisições assíncronas de forma eficiente.  

Principais operações realizadas via **API**:  

- `GET /books` → Retorna a lista de livros  
- `POST /books` → Adiciona um novo livro  
- `PUT /books/:id` → Atualiza informações de um livro  
- `DELETE /books/:id` → Remove um livro  

## 🌍 Deploy  

O projeto está hospedado na **Vercel** e pode ser acessado no link abaixo:  

🔗 **[Digital Library - Acesse Aqui](https://digital-library-lizmann.vercel.app/)**  
