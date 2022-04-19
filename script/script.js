"use strict";
let ArabicoseRomanos = [
    { romano: 'M',  arabico: 1000 },
    { romano: 'CM', arabico: 900 },
    { romano: 'D',  arabico: 500 },
    { romano: 'CD', arabico: 400 },
    { romano: 'C',  arabico: 100 },
    { romano: 'XC', arabico: 90 },
    { romano: 'L',  arabico: 50 },
    { romano: 'XL', arabico: 40 },
    { romano: 'X',  arabico: 10 },
    { romano: 'IX', arabico: 9 },
    { romano: 'V',  arabico: 5 },
    { romano: 'IV', arabico: 4 },
    { romano: 'I',  arabico: 1 },
];
let btn = document.querySelector('.botao');
function conversor(numeroArabico) {
    let numeroRomano = '';
    let arabico = numeroArabico;
    for (let i = 0; i < ArabicoseRomanos.length; i++) {
        if (ArabicoseRomanos[i].arabico <= numeroArabico) {
            numeroArabico = numeroArabico - ArabicoseRomanos[i].arabico;
            numeroRomano = numeroRomano + ArabicoseRomanos[i].romano;
            i--;
        }
    }
    let num2 = document.getElementById('InputRomano').value = `  ${numeroRomano}`;
    //console.log(`O numero ${arabico} corresponde a em Romano ${numeroRomano}`);
}
btn.addEventListener('click', function () {
    let num = document.getElementById('InputNumero').value;
    if (num >= 1 && num <= 3999) {
        conversor(num);
    }
    else if (num == 0) {
        alert('Não existe número romano com 0');
        //console.log('Não existe número romano com 0');
    }
    else if (num >= 4000 || num <= -1) {
        alert(`O número digitado: ${num} , não é valido para esta operação`);
        //console.log('OPS!! Tente Novamente !');  
         document.getElementById('InputNumero').value = '';
    }
    else if (num == undefined) {
        alert('VALOR NÃO DIGITADO');
        //console.log('VALOR NÃO DIGITADO !');
    }
});
