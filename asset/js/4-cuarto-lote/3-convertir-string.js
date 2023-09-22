//?funcion que muestra en consola que numero es par y cual es impar de los numeros dados anteriormente 
function convertirAString(arr) {
    let nuevoArr = [];
    //aqui se esta haciendo el proceso donde se añade cual es numero par y cual impar
    for (let i = 0; i < arr.length; i++) {
      nuevoArr[i] = arr[i] % 2 === 0 ? arr[i] + " es par" : arr[i] + " es impar";
    }

    return nuevoArr;
  }  
  //resultado en consola  
  let arrayOriginal = [10, 5, 8, 9, 11, 200, 37, 52, 67, 93];
  let arrayConvertido = convertirAString(arrayOriginal);
  console.log(arrayConvertido);
//?-end
  
