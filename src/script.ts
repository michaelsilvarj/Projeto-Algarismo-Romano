let ArabicoseRomanos  = [
   {romano:'M', arabico:1000},
   {romano:'CM',arabico:900},
   {romano:'D', arabico:500},
   {romano:'CD', arabico:400},
   {romano:'C', arabico:100},
   {romano:'XC', arabico:90},
   {romano:'L', arabico:50},
   {romano:'XL', arabico:40},
   {romano:'X', arabico:10},
   {romano:'IX', arabico:9},
   {romano:'V', arabico:5},
   {romano:'IV', arabico:4},
   {romano:'I', arabico:1},
];

let btn = document.getElementById('botao') as HTMLElement;




function conversor (numeroArabico:any){
   //let resultado = document.getElementById('algarismo');
   let numeroRomano ='';

   for (let i = 0; i < ArabicoseRomanos.length; i++) {
     
      if (ArabicoseRomanos[i].arabico <= numeroArabico) {
         numeroArabico = numeroArabico - ArabicoseRomanos[i].arabico;

         numeroRomano = numeroRomano + ArabicoseRomanos[i].romano ;
      }
   }
   console.log(`${numeroRomano}`);
}

btn.addEventListener('click',function converor(){
   
});
conversor(10);

//Parou em 10 min