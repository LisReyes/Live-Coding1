// Escribe tu código aquí.
// Recibe como parametro un array y una palabra
// Se compara el tamaño y las palabras que cumplen con el mismo tamaño se manda a imprimir al DOM


var nuevoli = document.getElementById("nuevo-li").value;

const comparaPalabras = (palabra,array) =>{
    var contador;
    var contadorP = palabra.length;
    let narray = [];
    for(let i=0;i<array.length;i++){
           if(array[i].length > contadorP){
                document.write("\n"+array[i]);
           }else{
                
           }
    }
    
}

const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];

comparaPalabras('bocina',myArray);