function insert(num)
{
var numero = document.getElementById('res').innerHTML;
document.getElementById('res').innerHTML = numero + num;
}
function Limpar() {
    document.getElementById('res').innerHTML = "";
}
function Apagar() {
    var resultado = document.getElementById('res').innerHTML;
    
    if (resultado.length > 0) {
        document.getElementById('res').innerHTML = resultado.substring(0, resultado.length - 1);
    }
}
function Calcular() {
    let resultado = document.getElementById('res').innerHTML;
    if(resultado) {
        document.getElementById('res').innerHTML = eval(resultado)
    } 
}
