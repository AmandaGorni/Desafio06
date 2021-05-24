// Crie um objeto que receba ao menos três propriedades sobre você.

const about =  {
        nome: "Amanda",
        idade: 30,
        adjetivo: "intensa"
    }

// Adicione uma nova propriedade sem alterar seu objeto inicial.

about.cidade="Itaboraí"

// Remova uma propriedade desse objeto.

delete about.idade

//Mostre no console todas as propriedades desse objeto.

console.log(about)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 

const cadastro = [
    {},
    {},
    {},
    {},
    {}
]

console.log(cadastro)

//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 

//fiz tbm pelo metodo mais trabalhoso para treinar add nova propriedade sem mudar o objeto inicial
cadastro[0].nome="Amanda"
cadastro[0].idade=30
cadastro[0].telefone=21456877
cadastro[0].amigos="Lara"
cadastro[1].nome="Amanda"
cadastro[1].idade=30
cadastro[1].telefone=21456877
cadastro[1].amigos="Lara"
cadastro[2].nome="Amanda"
cadastro[2].idade=30
cadastro[2].telefone=21456877
cadastro[2].amigos="Lara"
cadastro[3].nome="Amanda"
cadastro[3].idade=30
cadastro[3].telefone=21456877
cadastro[3].amigos="Lara"
cadastro[4].nome="Amanda"
cadastro[4].idade=30
cadastro[4].telefone=21456877
cadastro[4].amigos="Lara"

//ou assim:
const cadastro1 = [
    {
        nome: "Amanda",
        idade:30,
        telefone:21456877,
        amigos:["Lara", "Camila","Bruna","Tomaz","Luna","Pati"]
    },
    {
        nome: "Amanda",
        idade:30,
        telefone:21456877,
        amigos:["Rabi", "Camila","Bruna","Tomaz","Luna","Pati"]
    },
    {
        nome: "Amanda",
        idade:30,
        telefone:21456877,
        amigos:["Ada", "Camila","Bruna","Tomaz","Luna","Pati"]
    },
    {
        nome: "Amanda",
        idade:30,
        telefone:21456877,
        amigos:["Lura", "Camila","Bruna","Tomaz","Luna","Pati"]
    },
    {
        nome: "Amanda",
        idade:30,
        telefone:21456877,
        amigos:["Kira", "Camila","Bruna","Tomaz","Luna","Pati"]
    }
]
console.log(cadastro1)

//Na propriedade amigos, adicione ao menos 4 itens.

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro1[0].amigos[0])
console.log(cadastro1[1].amigos[0])
console.log(cadastro1[2].amigos[0])
console.log(cadastro1[3].amigos[0])
console.log(cadastro1[4].amigos[0])


//DUVIDA, perguntar na revisão:
//alterar valor de tdas as propriedades de objetos diversos
//assim alteraria em apenas [0]:
// cadastro1[0].amigos = ["lele","lili","bia","bill"]





