const prompt = require("prompt");
const message = require("prompt");
const schema = {
    properties: {
        nome: {
            pattern: /^[a-zA-Z\s\-]+$/,
            message: "Apenas letras, campo obrigatório",
            required: true,
        },
        sobrenome: {
            pattern: /^[a-zA-Z\s\-]+$/,
            message: "Apenas letras, campo obrigatório",
            required: true,
        },
        email: {
            pattern: /\w+.+\@\w+\.\w+\.?\w*/g,
            message: "Deve ser um email válido",
            required: true,
        },
        cpf: {
            pattern: /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/,
            message: "Deve ser um CPF válido",
            required: true,
        }
    }
};

prompt.start();

prompt.get(schema, function(_, result) {
    console.log("Nome: " + result.nome);
    console.log("Sobrenome: " + result.sobrenome);
    console.log("Email: " + result.email);
    console.log("CPF: " + result.cpf);
});