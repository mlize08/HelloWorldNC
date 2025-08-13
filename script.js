function inserirNome()  {
    let nomeUsuario = prompt("Qual o seu nome?");
    let elemento = document.querySelector("#nome-usuario");
    elemento.textContent = nomeUsuario;
}
inserirNome();

const linguagens = ["Javascript", "Python", "C"];
// indice      
linguagens[2] = "HTML";
console.log(linguagens[2]);       
const item = document.querySelector("#lista");

item.textContent = linguagens[1];
item.textContent = linguagens[2];
item.textContent = linguagens[0];

//Solução 2: Usar laço de repetição "for of"
for (const linguagem of linguagens) {
  const itemDaLista = document.createElement("li");
  itemDaLista.textContent = linguagem;
  item.appendChild(itemDaLista); // "item" foi criada mais acima
}


let aluno1 = {
  nome: "Gabriel",
  idade: 13,
  anoLetivo: "2ºsérie",
  materiasFavoritas: ["Geografia","Programação","Arte"]
}

console.log(aluno1.nome); // “Gabriel”
console.log(aluno1.idade); // 13
console.log(aluno1.materiasFavoritas);
// ["Geografia","Programação","Arte"]
console.log(aluno1.materiasFavoritas[1]);

const objeto = document.querySelector("#aluno");
objeto.textContent = aluno1.nome;
objeto.textContent = aluno1.idade;
objeto.textContent = aluno1.materiasFavoritas;
objeto.textContent = aluno1.materiasFavoritas[2];