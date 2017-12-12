var idade = 17;
var meuNome = "Israel";
var meuSobrenome = "Gomes";

alert(idade == 17 ? meuNome + " " + meuSobrenome : "Quem é você");

var casa = {
    nome: "israel",
    modificar: function(nome)
    {
        this.nome = nome;
    },
    deletar: function()
    {
        delete this.nome;
    }

};

for(x = 0; x<=10; x++)
{
    console.log(x);
}

var multiplicacao = function(x, y)
{
    return x * y;
}

console.log(multiplicacao(5, 5));
console.log(casa.nome);
casa.modificar("Casa1");
console.log(casa.nome);
casa.deletar();


console.log("===================================================");
