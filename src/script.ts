let ArabicoseRomanos = [
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

let btn = document.querySelector('.botao');

function conversor(numeroArabico) {
   
   let numeroRomano = '';
   let arabico = numeroArabico;

   //loop no objeto
   for (let i = 0; i < ArabicoseRomanos.length; i++) {

       //Condição caso objeto arabico seja menor ou igual ao arabico
       if (ArabicoseRomanos[i].arabico <= numeroArabico) {

           numeroArabico = numeroArabico - ArabicoseRomanos[i].arabico;

           numeroRomano = numeroRomano + ArabicoseRomanos[i].romano;
           i--;
       }
   }

   // Joga no input o valor em algarismo romano
  let num2 : string = (<HTMLSelectElement>document.getElementById('InputRomano')).value = `  ${numeroRomano}`;
   console.log(`O numero ${arabico} corresponde a em Romano ${numeroRomano}`);
} 

btn.addEventListener('click', function(){
    
    //Tipo any por retornar um void
   let num : any = (<HTMLSelectElement>document.getElementById('InputNumero')).value ;
   
    if(num >= 1 && num <=3999){
       conversor(num);

   } else  if(num == 0){
       alert('Não há algarismo romano com o númeoro informado');
       console.log('Não há algarismo romano com o númeoro informado');
      

   } else if(num >=4000 || num <= -1){
       alert('OPS!! Valores não permitido');
       console.log('OPS!! Tente Novamente !');

   } else  if(num == undefined){
    alert('VALOR NÃO DIGITADO');
    console.log('VALOR NÃO DIGITADO !');
   }
 });