# 🎮 Jogo da Forca em Node.js

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org/)

Um jogo de terminal simples com palavras aleatórias de frutas.

## 🚀 Começando

### Pré-requisitos
- Node.js 18+
- NPM/Yarn

### Instalação
```bash 
git clone https://github.com/fmspdeveloper/jogo-da-forca.git
cd jogo-da-forca
npm install
```
2. Instale as dependências:
```bash
npm installreadline-sync
```
3. Inicie o jogo:
```bash
node main.js
```


🎮 Como Jogar
Você verá a primeira letra da fruta e o restante como underlines (_)

Digite letras para adivinhar a palavra

Você tem 6 tentativas para acertar

Letras repetidas não consomem tentativas

Exemplo:
```bash
----Jogo da Forca----

Fruta: m_____
Tentativas restantes: 6
Letras tentadas:
Digite uma letra: a
Você acertou a letra!

Fruta: ma___a
...
```
🏗️ Estrutura do Projeto
```bash
jogo-da-forca/
├── model/
│   └── model.js          # Lista de frutas
├── function/
│   └── function.js       # Lógica principal do jogo
├── main.js               # Ponto de entrada
└── README.md
```
📌 Arquivos Principais
1. `model/model.js`: Contém a lista de frutas.
```bash
const listaDeFrutas = [
  'Pera', 'Banana', 'Laranja', 'Abacaxi',
  // ... (lista completa de frutas)
];
export default listaDeFrutas;
```
2. function/function.js
   Contém toda a lógica do jogo:

Seleção aleatória de frutas

Controle de tentativas

Atualização da palavra oculta

Verificação de vitória/derrota

3. main.js
```bash
import selecionarFrutaAleatoria from './function/function.js';
selecionarFrutaAleatoria();
```
🛠️ Funcionalidades Implementadas
✅ Sistema de tentativas limitadas (6 erros)
✅ Exibição progressiva da palavra oculta
✅ Validação de input (apenas letras únicas)
✅ Prevenção de letras repetidas
✅ Mensagens claras de feedback

📝 Regras do Jogo
Apenas letras de A-Z são válidas

Maiúsculas/minúsculas são ignoradas

Vitória: acertar todas as letras

Derrota: 6 letras erradas

💡 Melhorias Futuras
Adicionar mais categorias (animais, países)

Implementar dificuldades (tamanho da palavra)

Adicionar sistema de pontuação

Criar interface gráfica

🤝 Como Contribuir
Faça um fork do projeto

Crie sua branch (git checkout -b feature/nova-funcionalidade)

Commit suas mudanças (git commit -m 'Adiciona X funcionalidade')

Push para a branch (git push origin feature/nova-funcionalidade)

Abra um Pull Request


<div align="center"> Feito com ❤️ por FM Developer 👋 </div> ```































