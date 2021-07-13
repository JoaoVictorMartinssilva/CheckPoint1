///////////////////// INICIO ////////////////////////

function Conta(nome, senha) {
    this.nome = nome;
    this.senha = senha;
}

var contas = [];

function ler() {
    const botao = document.getElementById('btnEnviar');
    botao.addEventListener("click", function() {
        const input = document.querySelectorAll('input');
        const conta = new Conta();

        for (x of input) {
           if(x.type == 'text'){
                if (x.value != "") {
                conta.nome = x.value
                }
           }
           if(x.type == 'password'){
                if (x.value != "") {
                conta.senha = x.value
                }
           }
        }
        
        contas = [conta]
        console.log(contas)
    })


}



function validar() {
    const input_nome = document.querySelectorAll('input.nome');
    const input_senha = document.querySelectorAll('input.senha');
    let valida = true;
    // console.log(input_nome)
    for (x of input_nome) {
        if (x.value == "") {
            console.log("NÃO FOI")
            x.style.border = "2px solid #ff0000";
            valida = false;
        } else {
            console.log("FOI");
            x.style.border = "2px solid green";
        }
    }
    for (x of input_senha) {
        if (x.value == "") {
            console.log("NÃO FOI SENHA")
            x.style.border = "2px solid #ff0000";
            valida = false;
        } else {
            console.log("FOI SENHA");
            x.style.border = "2px solid green";

        }
    }

    if (valida) {
        return valida, window.open("./portal.html");
    } else {
        console.alert("ERRO AO ACESSAR O LOGIN")
    }

}