
let student = prompt("Qual o nome do(a) aluno(a)?")
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")

let average = (Number(n1) + Number(n2)) / 2

let result = average > 7

average = average.toFixed(1)

if (result) {
  alert(" A média do(a) aluno(a)  " + student + " é de " + average + " \n Parabéns! Você passou no concurso!!!!!!!!! ")
} else {
  alert(" A média do(a) aluno(a)  " + student + " é de " + average + " \n Não foi desta vez :( " + student + " Tente na próxima oportunidade")
}