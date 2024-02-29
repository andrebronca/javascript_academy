
//cada módulo é um arquivo único
/*
file-tools.mjs
main.mjs
*/
//file-tools.mjs exporta a função
export function isTextFilePath(filePath){
    return filePath.endsWith('.txt');
}

//main.mjs importa a função

//importando o módulo inteiro com namespace do objeto 'path'
import * as path from 'path';

//importando um único export do módulo file-tools.mjs
import {isTextFilePath} from './file-tools.mjs';