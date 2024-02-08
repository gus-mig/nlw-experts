const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de programação de back-end",
      "Uma linguagem de programação de front-end",
      "Uma linguagem de programação de banco de dados",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
    respostas: [
      "Determinar o tipo de um arquivo",
      "Determinar o tipo de uma variável ou expressão",
      "Determinar o tipo de uma função",
    ],
    correta: 1
  },
  {
    pergunta: "Qual destes métodos é usado para adicionar elementos a um array em JavaScript?",
    respostas: [
      ".push()",
      ".add()",
      ".append()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: [
      "v name = valor;",
      "let name = valor;",
      "variable name = valor;",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o resultado de 10 + '5' em JavaScript?",
    respostas: [
      "105",
      "15",
      "Erro de tipo",
    ],
    correta: 0
  },
  {
    pergunta: "O que o método 'slice()' faz em JavaScript?",
    respostas: [
      "Remove o último elemento de um array",
      "Divide uma string em um array de substrings",
      "Adiciona elementos a um array",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o operador usado para comparar igualdade de valor e tipo em JavaScript?",
    respostas: [
      "==",
      "===",
      "=",
    ],
    correta: 1
  },
  {
    pergunta: "O que o método 'forEach()' faz em JavaScript?",
    respostas: [
      "Itera sobre os elementos de um array",
      "Remove elementos duplicados de um array",
      "Filtra os elementos de um array com base em uma condição",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o resultado de '3' + 2 + 1 em JavaScript?",
    respostas: [
      "6",
      "321",
      "32",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a forma correta de comentar uma linha em JavaScript?",
    respostas: [
      "// Comentário",
      "<!-- Comentário -->",
      "/* Comentário */",
    ],
    correta: 0
  },
];
//buscar documentos 
const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")
const corretas = new Set()
//new cria coisas novas, e o Set é um objeto armazena um conjunto de objetos e informações
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector("#acertos span")
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

//Loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector("h3").textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    //querySelector procura um elemento no HTML (no caso o dt)
    dt.querySelector("span").textContent = resposta
    dt.querySelector("input").setAttribute("name", "pergunta" + perguntas.indexOf(item))
    //procura o índice
    dt.querySelector("input").value = item.respostas.indexOf(resposta)
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

    }

    quizItem.querySelector("dl").appendChild(dt)
  }

  quizItem.querySelector("dl dt").remove()

  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}