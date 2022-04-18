var ArabicoseRomanos = [
    { romano: 'M', arabico: 1000 },
    { romano: 'CM', arabico: 900 },
    { romano: 'D', arabico: 500 },
    { romano: 'CD', arabico: 400 },
    { romano: 'C', arabico: 100 },
    { romano: 'XC', arabico: 90 },
    { romano: 'L', arabico: 50 },
    { romano: 'XL', arabico: 40 },
    { romano: 'X', arabico: 10 },
    { romano: 'IX', arabico: 9 },
    { romano: 'V', arabico: 5 },
    { romano: 'IV', arabico: 4 },
    { romano: 'I', arabico: 1 },
];
var btn = document.getElementById('botao');
function conversor(numeroArabico) {
    //let resultado = document.getElementById('algarismo');
    var numeroRomano = '';
    var numero = numeroArabico;
    //loop no objeto
    for (var i = 0; i < ArabicoseRomanos.length; i++) {
        //Condição caso objeto arabico seja menor ou igual ao arabico
        if (ArabicoseRomanos[i].arabico <= numeroArabico) {
            numero = numero - ArabicoseRomanos[i].arabico;
            numeroRomano = numeroRomano + ArabicoseRomanos[i].romano;
            i--;
        }
    }
    console.log(numeroRomano);
}
btn.addEventListener('click', function converor() {
});
conversor(10);
//Parou em 10 min
// Parou em 15.28
