let input = document.querySelector("#inputText")

let textValue = "";

function addNumber(number) {
    textValue += number;
    updateText();
}
function addOperador(operador) {
    textValue += operador;
    updateText();
}
function addDecimal() {
    textValue += ".";
    updateText();
}
function clearText() {
    textValue = "";
    updateText();
}
function updateText() {
    input.value = textValue;
}
function calculate(){
    try {
        let conta = textValue.replace(/(\d+)%(\d+)/g, '($1/100)*$2');
        let resultado = eval(conta);
        if (!Number.isInteger(resultado)) {
            resultado = resultado.toFixed(2);
        }

        textValue = resultado.toString();
        updateText();
    } catch {
        textValue = 'Erro';
        updateText();
        setTimeout(clearText, 1000);
    }
}
