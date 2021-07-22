let numero = ''
const valor = document.querySelector("#valor")
const butoes = document.querySelectorAll(".butao")

const operacao = {
    primeiroNumero :0,
    operador : "",
    segundoNumero : 0,
}

butoes.forEach(function (butao){
    butao.addEventListener("click", function(e){
        tipoButao = e.currentTarget.classList
        
        if (tipoButao.contains("deletar")){
            numero = '';
            operacao["primeiroNumero"] = 0;
            operacao["segundoNumero"] = 0;
            operacao["operador"] = 0;
            
            document.querySelector("#valor").innerHTML = 0;
        }

        if (tipoButao.contains("um")){ 
            numero += '1';
            document.querySelector("#valor").innerHTML = numero;
    
        }

        if (tipoButao.contains("dois")){
            numero += '2';
            document.querySelector("#valor").innerHTML = numero;
        }

        if (tipoButao.contains("tres")){
            numero += '3';
            document.querySelector("#valor").innerHTML = numero;
        }

        if (tipoButao.contains("quatro")){
            numero += '4';
            document.querySelector("#valor").innerHTML = numero;
        }

        if (tipoButao.contains("cinco")){
            numero += '5';
            document.querySelector("#valor").innerHTML = numero;
        }

        if (tipoButao.contains("seis")){
            numero += '6';
            document.querySelector("#valor").innerHTML = numero;
        }

        if (tipoButao.contains("sete")){
            numero += '7';
            document.querySelector("#valor").innerHTML = numero;
        }

        if (tipoButao.contains("oito")){
            numero += '8';
            document.querySelector("#valor").innerHTML = numero;
        }

        if (tipoButao.contains("nove")){
            numero += '9';
            document.querySelector("#valor").innerHTML = numero;
        }

        if (tipoButao.contains("zero")){
            numero += '0';
            document.querySelector("#valor").innerHTML = numero;
        }

        if (tipoButao.contains("ponto")){
            numero += '.';
            document.querySelector("#valor").innerHTML = numero;
        }

        if (tipoButao.contains("mais")){
            numero = parseFloat(numero)
            operacao["primeiroNumero"] = numero;
            operacao["operador"] = "mais";
            numero = "";
            valor.innerHTML = 0;
        }

        if (tipoButao.contains("menos")){
            numero = parseFloat(numero)
            operacao["primeiroNumero"] = numero;
            operacao["operador"] = "menos";
            numero = "";
            valor.innerHTML = 0;
        }
    
        if (tipoButao.contains("vezes")){
            numero = parseFloat(numero)
            operacao["primeiroNumero"] = numero;
            operacao["operador"] = "vezes";
            numero = "";
            valor.innerHTML = 0;
        }

        if (tipoButao.contains("dividir")){
            numero = parseFloat(numero)
            operacao["primeiroNumero"] = numero;
            operacao["operador"] = "dividir";
            numero = "";
            valor.innerHTML = 0;
            console.log(operacao, numero)
        }

        if (tipoButao.contains("igual")){
            numero = parseFloat(numero)
            operacao["segundoNumero"] = numero;
            console.log(operacao)

            if (operacao['operador'] == "mais") {
                numero = operacao["primeiroNumero"] + operacao["segundoNumero"]
                operacao["primeiroNumero"] = numero
                operacao["segundoNumero"] = 0
                valor.innerHTML = numero
            }

            if (operacao['operador'] == "menos") {
                numero = operacao["primeiroNumero"] - operacao["segundoNumero"]
                operacao["primeiroNumero"] = numero
                operacao["segundoNumero"] = 0
                valor.innerHTML = numero;
            }
            
            if (operacao['operador'] == "dividir") {
                numero = operacao["primeiroNumero"] / operacao["segundoNumero"]
                operacao["primeiroNumero"] = numero
                operacao["segundoNumero"] = 0
                valor.innerHTML = numero;
            }

            if (operacao['operador'] == "vezes") {
                numero = operacao["primeiroNumero"] * operacao["segundoNumero"]
                operacao["primeiroNumero"] = numero
                operacao["segundoNumero"] = 0
                valor.innerHTML = numero;
            }

            if (operacao['operador'] == "") {
                valor.innerHTML = numero
            }
        }
    })

})
