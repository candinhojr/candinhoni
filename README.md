![Logo](https://github.com/candinhojr/candinhoni/blob/master/src/assets/logo.svg)

# Candinhoni

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/candinhojr/candinhoni/blob/master/LICENSE)

## :bookmark_tabs: Menu

- [Sobre o projeto](#scroll-sobre-o-projeto)
- [Screenshot](#rice_scene-screenshot)
- [O que foi abordado nos cursos](#blue_book-o-que-foi-abordado-nos-cursos)
  - [React: lidando com arquivos estáticos](#react-lidando-com-arquivos-estáticos)
  - [React: conhecendo a biblioteca React Router](#react-conhecendo-a-biblioteca-react-router)
- [Instalação e uso](#floppy_disk-instalação-e-uso)
- [Licença](#memo-licença)
- [Autor](#smiley_cat-autor)

## :scroll: Sobre o projeto

Projeto com objetivo de disponibilizar o cardápio de um restaurante, possibilitando ao usuário _buscas_ de pratos, _aplicar filtros_ e _ordenação_ aos resultados.

Este projeto foi feito com base no que aprendi nos cursos [React: lidando com arquivos estáticos](https://cursos.alura.com.br/course/react-arquivos-estaticos) e [React: conhecendo a biblioteca React Router](https://cursos.alura.com.br/course/react-biblioteca-react-router) do Alura. Estes cursos fazem parte da formação [React com Typescript](https://cursos.alura.com.br/formacao-react-ts).

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app).

## :rice_scene: Screenshot

![Gif projeto Candinhoni](https://github.com/candinhojr/candinhoni/blob/master/Candinhoni.gif)

## :blue_book: O que foi abordado nos cursos

Abaixo, os temas abordados nos cursos [React: lidando com arquivos estáticos](https://cursos.alura.com.br/course/react-arquivos-estaticos) (6 aulas) e [React: conhecendo a biblioteca React Router](https://cursos.alura.com.br/course/react-biblioteca-react-router) (6 aulas)

### [React: lidando com arquivos estáticos](https://cursos.alura.com.br/course/react-arquivos-estaticos)

#### Aula 1 - Criando o projeto

- Criar projetos usando Create React App;
- Vimos como podemos usar templates, como `typescript` para criar projetos com CRA e depois removemos o que não será utilizado neste projeto;
- Usar CSS Modules com TypeScript e Sass;
- Aplicamos estilos escritos em Sass via CSS Modules e adicionamos a capacidade do Visual Studio Code oferecer autocomplete dos módulos de estilos com `typescript-plugin-css-modules`.

#### Aula 2 - Assets

- Importar um svg;
  - Vimos como o webpack entende aquela string que fornecemos ao **src** da tag img e porque não funciona, então, aprendemos como importar um svg da forma correta.
- Utilizar um svg como componente;
  - Melhoramos a nossa logo alterando a tag img por um componente que se torna um svg no final.
- Imports absolutos;
  - Aprendemos como configurar e utilizar os imports absolutos para evitar voltar muitas pastas ao importar um arquivo.
- Utilizar a biblioteca reset css para resetar o css;
  - Resetamos os estilos da nossa página utilizando uma biblioteca chamada **reset.css** que nos ajuda a limpar os estilos padrões de cada elemento de acordo com cada navegador.

#### Aula 3 - Header e buscador

- Importar fontes externas
  - Aprendemos como importar fontes externas no nosso projeto utilizando o google fonts.
- Utilizar o normalize.css
  - Utilizamos o normalize.css para padronizar os estilos da página html em cada navegador.
- Utilizar ícones
  - Aprendemos como é fácil utilizar ícones com a biblioteca `react-icons`.
- Ignorar arquivos para build
  - Vimos como ignorar arquivos no momentos de build para que sejam utilizados apenas quando os chamar.
- Criar variáveis css
  - Criamos variáveis css para nos auxiliar na padronização dos estilos da página, evitando repetição e facilitando na manutenção de código.

#### Aula 4 - Ordenação e filtros

- Inferir o tipo de um objeto
  - O operador `typeof` nos permite inferir a tipagem de um objeto sem a necessidade de criar uma interface.
- Manipulação de objetos
  - Utilizamos `[]` em volta do nome da chave de um objeto quando o valor da chave é dinâmico.
- Biblioteca **classnames**
  - Essa biblioteca nos permite concatenar classes CSS utilizando sintaxe de objetos.

#### Aula 5 - Lista de itens

- Renderizar uma lista de componentes
  - Podemos utilizar o _spread operator_ para não precisar passar as _props_ manualmente quando temos total controle do componente.
- Utilizar a pasta public
  - Arquivos estáticos que devem ser referenciados dinamicamente precisam estar dentro dessa pasta.
- Gerar os arquivos utilizados em produção
  - Com o comando `npm run build` podemos verificar quais arquivos estarão presentes no ambiente de produção.

#### Aula 6 - Finalizando o projeto

- Buscar com expressão regular
  - Utilizar expressões regulares em buscas de textos.
- Manipular elementos de uma lista
  - Alterar a quantidade ou ordenar os elementos de uma lista com métodos `filter` e `sort`.
- Tipar o `useState`
  - Escrever `useState<Tipo>` para tipar o `state` e o `setState`.

### [React: conhecendo a biblioteca React Router](https://cursos.alura.com.br/course/react-biblioteca-react-router)

#### Aula 1 - O que é SPA?

- ESLint;
  - O que é e como configurar o ESLint.
- Como corrigir erros de código seguindo as regras da configuração;
- Criar a página de início da aplicação.

#### Aula 2 - Estrutura básica do Router DOM

- Separar os dados do cardápio para uma pasta separada;
- BrowserRouter e HashRouter;
  - Diferença entre BrowserRouter e HashRouter.
- Routes;
  - Utilizar o routes para alternar entre rotas.

#### Aula 3 - Criando as rotas

- Reutilizar o menu;
- Reaproveitar o header utilizando o react-router-dom;
- Utilizar o componente Link;
- Fazer a página padrão.

#### Aula 4 - Router DOM Hooks

- Desenvolver um tema para a aplicação;
- Aplicar o componente Outlet do react-router-dom;
- Utilizar o hook _useNavigate_ para navegar entre rotas;
- Criar uma tela not found para páginas não encontradas.

## :floppy_disk: Instalação e uso

```
git clone https://github.com/candinhojr/candinhoni
```

### `npm start`

Executa o aplicativo no modo de desenvolvimento.
Acesse [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

### Dependencias e bibliotecas

- [React](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)
- [Typescript](https://www.typescriptlang.org/pt/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Normalize.css](https://necolas.github.io/normalize.css/)
- [Classnames](https://github.com/JedWatson/classnames#readme)
- [React Router DOM](https://github.com/remix-run/react-router/tree/main/packages/react-router-dom#readme)

### Estrutura de pastas

```
.
├── public # Public files
├── src # Project source code
├── .eslintrc.json
├── .gitignore
├── Candinhoni.gif
├── LICENSE
├── README.md
├── package.json
└── tsconfig.json
```

## :memo: Licença

The [MIT License](https://github.com/candinhojr/candinhoni/blob/master/LICENSE) (MIT)

## :smiley_cat: Autor

- [@candinhojr](https://candinhojr.github.io/)

Feito com :heart: e com bastante :coffee:
