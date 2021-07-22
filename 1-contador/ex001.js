const menos = document.querySelector("#menos")
const resetar = document.querySelector("#resetar")
const mais = document.querySelector("#mais")
let contador = 0;
const valor = document.querySelector("#valor")

menos.addEventListener("click" , e => {
    contador --;
    valor.innerHTML = contador;
    if (contador < 0){
        valor.style.color = "red";
    }

    else if (contador > 0){
        valor.style.color = 'green'
    }

    else{
        valor.style.color = 'black'
    }
})


mais.addEventListener("click" , e=>{
    contador ++;
    valor.innerHTML = contador;
    if (contador < 0){
        valor.style.color = "red";
    }

    else if (contador > 0){
        valor.style.color = 'green'
    }

    else{
        valor.style.color = 'black'
    }
})

resetar.addEventListener("click", e =>{
    contador = 0;
    valor.innerHTML = contador;
    valor.style.color = 'black'
})

