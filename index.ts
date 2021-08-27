function sumar(valor1:number, valor2:number): number {
    return valor1+valor2;
  }

function multiplicar(valor3:number, valor4:number): number {
return valor3*valor4;
}
function restar(valor1:number, valor3:number): number{
  return valor1-valor3;
}
function preciofinal(pb:number, tasad:number, tasaiva: number): number{
  return pb+(tasad/100)+(tasaiva/100);
}
  

  console.log(sumar(3, 5));
  console.log(multiplicar(3,5));
  console.log(restar(3,3));
  console.log(preciofinal(100, 28, 45));