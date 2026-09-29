# ONG Pró Maná

Projeto web da ONG Pró Maná para apresentar a iniciativa e oferecer um fluxo demonstrativo de cadastro relacionado a doações.

## Funcionalidades

- Página inicial com apresentação da ONG.
- Página institucional "Quem Somos".
- Formulário de cadastro com formatação e validação de telefone, CPF e CEP.
- Armazenamento dos cadastros no `localStorage` do navegador.
- Navegação entre as telas principais por rotas baseadas em hash.
- Interface construída com Bootstrap 5 e CSS próprio.

> Este projeto é uma demonstração front-end. Os dados ficam somente no navegador utilizado; não há servidor, banco de dados ou processamento real de pagamentos e doações.

## Como executar

Como o projeto usa módulos JavaScript, abra-o por um servidor HTTP local, e não diretamente pelo protocolo `file://`.

Com Python instalado, abra um terminal na pasta do projeto e execute:

```powershell
py -m http.server 8000
```

Em seguida, acesse <http://localhost:8000/projeto.html> no navegador. Para encerrar o servidor, pressione `Ctrl+C` no terminal.

Também é possível executar a pasta com uma extensão de servidor local, como o Live Server do VS Code.

O Bootstrap é carregado de uma CDN; é necessária conexão com a internet para carregar seus estilos e componentes.

## Estrutura

```text
.
├── assets/                 # Recursos estáticos
├── js/
│   ├── main.js             # Inicialização, renderização e eventos
│   ├── router.js           # Navegação entre telas
│   ├── storage.js          # Persistência no localStorage
│   ├── templates.js        # Templates das páginas
│   └── validation.js       # Formatação e validação dos campos
├── pagina de cadastro.html # Entrada alternativa para o cadastro
├── projeto.html            # Página inicial e entrada principal
├── quem somos.html         # Página institucional
└── style.css               # Estilos personalizados
```

## Dados locais

Os cadastros são guardados na chave `pro-mana-cadastros` do `localStorage`. Eles podem ser removidos ao limpar os dados do site no navegador. Como não há backend, os dados não são compartilhados entre dispositivos ou usuários.
