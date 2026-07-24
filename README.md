# Vértice

Repositório de **Back-end + Web** para o projeto **Vértice**, um portal de notícias desenvolvido para informar usuários de maneira rápida, organizada e confiável.

O sistema permite que os leitores explorem artigos de diversas categorias, pesquisem conteúdos, visualizem matérias completas, comentem publicações e acompanhem as notícias mais recentes. Além disso, conta com uma área administrativa restrita para gerenciamento de artigos, categorias, autores e upload de imagens.

Projeto desenvolvido para a **Unidade Curricular 31 – Projeto Final – Codificar Back-end**.

---

# Stack Utilizada

## Back-End

* **Node.js + TypeScript** — Runtime e linguagem principal do projeto.
* **Express** — Framework responsável pelas rotas, requisições HTTP e middlewares.
* **Programação Orientada a Objetos (POO)** — Utilização de classes, encapsulamento, validações e métodos `fromJSON()` e `toJSON()`.
* **Repository Pattern** — Camada de persistência desacoplada utilizando arquivos `.json`.
* **Autenticação e Segurança** — `bcrypt` para criptografia de senhas e `express-session` para gerenciamento de sessões.
* **Upload de Arquivos** — `Multer` para armazenamento das imagens dos artigos.
* **Testes Automatizados** — `Jest` para testes unitários e de integração.

## Front-End

* **EJS (Embedded JavaScript)** — Renderização dinâmica de páginas HTML.
* **CSS3 Personalizado** — Interface responsiva desenvolvida sem dependência exclusiva de frameworks.
* **JavaScript Vanilla** — Consumo das rotas utilizando `Fetch API`, manipulação do DOM e validações da interface.

---

# Equipe e Papéis

| Integrante                           | Papel Principal         | Responsabilidades                                                                                                |
| :----------------------------------- | :---------------------- | :--------------------------------------------------------------------------------------------------------------- |
| **Gabriel Costa Filgueira**          | Líder Técnico           | Definição da arquitetura do sistema, revisão de código, gerenciamento do projeto e suporte técnico à equipe.     |
| **José Luciano Alves de Brito**      | Desenvolvedor Back-end  | Desenvolvimento das entidades, repositories, controllers, autenticação, rotas e integração com os arquivos JSON. |
| **Mateus Vinicius Menezes do Couto** | Desenvolvedor Front-end | Desenvolvimento das páginas em EJS, estilização em CSS, criação dos scripts JavaScript e experiência do usuário. |
| **Vitor Filgueira**                  | Testes e Documentação   | Desenvolvimento dos testes automatizados com Jest, documentação técnica e elaboração do README.                  |

> **Nota:** Apesar da divisão de responsabilidades, todos os integrantes colaboram nas diferentes etapas do desenvolvimento do projeto.

---

# Estrutura de Pastas

```text
vertice/
├── docs/                      # Diagramas UML e documentação técnica
│   ├── caso-de-uso.png
│   └── diagrama-sequencia.png
├── dados/                     # Persistência em arquivos JSON
│   ├── artigos.json
│   ├── categorias.json
│   ├── comentarios.json
│   └── autores.json
├── public/                    # Arquivos públicos
│   ├── css/                   # Estilos da aplicação
│   ├── js/                    # Scripts JavaScript
│   ├── uploads/               # Imagens dos artigos
│   └── img/                   # Recursos estáticos
├── src/
│   ├── entities/              # Classes (Artigo, Categoria, Comentario e Autor)
│   │   └── __tests__/
│   ├── models/                # Repositories
│   │   └── __tests__/
│   ├── routes/                # Rotas da aplicação
│   │   └── __tests__/
│   ├── middlewares/           # Autenticação, permissões e upload
│   ├── views/                 # Templates EJS
│   │   ├── partials/
│   │   └── ...
│   ├── app.ts                 # Configuração do Express
│   └── server.ts              # Inicialização do servidor
├── jest.config.js             # Configuração do Jest
├── tsconfig.json              # Configuração do TypeScript
├── package.json
└── README.md
```

---

# Funcionalidades

* Cadastro e autenticação de autores.
* Publicação, edição e exclusão de artigos.
* Organização dos artigos por categorias.
* Sistema de comentários.
* Pesquisa de artigos.
* Área administrativa protegida.
* Upload de imagens para os artigos.
* Controle de sessões de login.
* Testes automatizados utilizando Jest.

---

# Entidades

O sistema é composto pelas seguintes entidades:

* **Artigo** — Representa uma notícia publicada no portal, contendo título, conteúdo, imagem, data de publicação e categoria.
* **Categoria** — Responsável por organizar os artigos em diferentes temas.
* **Comentario** — Permite que os leitores interajam com os artigos por meio de comentários.
* **Autor** — Representa os responsáveis pela criação e administração dos artigos publicados.

---

# Objetivo do Projeto

O **Vértice** foi desenvolvido com o propósito de reunir informações em um único portal, oferecendo uma plataforma moderna para publicação e leitura de notícias.

O projeto segue boas práticas de desenvolvimento utilizando arquitetura MVC, Programação Orientada a Objetos (POO), Repository Pattern e testes automatizados, priorizando organização, desempenho, segurança e facilidade de manutenção.
