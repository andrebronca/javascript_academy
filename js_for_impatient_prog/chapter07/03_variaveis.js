//const cria variáveis imutáveis
//deve ser declarada e inicializada
//declarando e inicializando x (ligação imutável)
const x = 8;
//x = 9; //TypeError: Assignment to constant variable.

//declarando (ligação mutável)
let y;
y = 3 * 5;
y *= 3;

let z = 3 * 5;

/* nomear variáveis
gramaticalmente o nome correto é: identificador
para variáveis e propriedades.

unicode letters: A-Z, a-z
$, _
unicode digits: 0-9
    não pode iniciar identificador com número

identificador não pode ser igual palavra reservada. Só é 
    permitido em propriedades.

casing styles
camelCase
snake_case / underscore_case
dash-case / kebab-case

capitalization
functions: myFunction
methods: obj.myMethod
css:
    entity: special-class
    correspondente js variavel: specialClass
classes: MyClass
constant: MY_CONSTANT (acho mais apropriado)
    ou: myConstant (não gostei, parece um identificador)

*/

/* se o parametro é um '_' ou inicia com '_', significa que 
não é usado
*/
arr.map((_x, i) => i)

class ValueWrapper {
    constructor(value){
        this._value = value;    //propriedade inicia com '_' é private
    }
}

