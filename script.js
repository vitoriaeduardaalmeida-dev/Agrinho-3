const botao = document.getElementById('modo-btn');

botao.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){
        botao.innerHTML = '☀️';
    }else{
        botao.innerHTML = '🌙';
    }
});

let numero = 0;
const contador = document.getElementById('numero');

const intervalo = setInterval(() => {
    numero++;
    contador.innerHTML = numero;

    if(numero >= 500){
        clearInterval(intervalo);
    }
}, 10);
