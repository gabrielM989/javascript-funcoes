
var a = parseFloat(prompt('Digite o valor de "A": '))
var b = parseFloat(prompt('Digite o valor de "B": '))
var c = parseFloat(prompt('Digite o valor de "C": '))
var coeficiente1
var coeficiente2 

 
function delta (delta, coeficiente1, coeficiente2){

    delta = b**2 - 4*a*c
    console.log(delta)


    if(delta < 0){
        document.write(`Quando o delta é negativo, não há raízes <br/>`);  
      } else{
        
        document.write(`Quando o delta é positivo, raízes diferentes <br/>`);  
        
        coeficiente1 = (-b + Math.sqrt(delta)) / (2 * a);
        coeficiente2 = (-b -  Math.sqrt(delta)) / (2 * a);
        
        document.write(`x2 =  ${coeficiente1} + <br/>`);
        document.write(`x2 =  ${coeficiente2} + <br/>`);

    }
    

}
delta()
resolucao() 


/* function delta (delta){

    delta = b**2 - 4*a*c
    console.log(delta)
}

function coeficiente1(coeficiente1){

    coeficiente1 = (-b + Math.sqrt(delta)) / (2 * a);
    console.log(coeficiente1)
}

function coeficiente2(coeficiente2){

   coeficiente2 = (-b - Math.sqrt(delta)) / (2 * a);
   console.log(coeficiente2)
}




delta()
coeficiente1()
coeficiente2()
 */