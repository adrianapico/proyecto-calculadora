function numeros(valor){
    document.getElementById('resultado-calculadora').value += valor;
}

function operacion(){
    var opera = document.getElementById('resultado-calculadora').value;
    if (opera==0){
        document.getElementById('resultado-calculadora').value = "¡No hay operación!";

    }else{
        document.getElementById('resultado-calculadora').value = eval(opera);
    }
}

function borrar(){
    document.getElementById('resultado-calculadora').value = " ";
}

// para el modo oscuro
function cambiarModo() { 
    var cuerpoweb = document.body; 
    cuerpoweb.classList.toggle("oscuro"); 
}