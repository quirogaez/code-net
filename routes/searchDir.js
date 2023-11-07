import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// Definición de la función searchDir
export function searchDir() {
    // Obtiene la ruta del archivo actual (__filename) a partir de la URL del módulo actual
    const __filename = fileURLToPath(import.meta.url);
    
    // Obtiene el directorio del archivo actual (__dirname) a partir de __filename
    const __dirname = dirname(__filename);
    
    // Imprime un mensaje para indicar que el proceso está en este punto del código
    console.log("Estoy aquí");
    
    // Imprime la ruta completa del archivo actual (__filename)
    console.log(__filename);
    
    // Divide la ruta en un array separando por la barra invertida (\\)
    const __dirnameArray = __dirname.split("\\");
    
    // Elimina las últimas dos partes del array (__dirnameArray)
    __dirnameArray.splice(__dirnameArray.length - 1, 2);
    
    // Une las partes restantes del array en una sola ruta (__dirnameAll)
    const __dirnameAll =path.join(...__dirnameArray);
    
    // Imprime la ruta completa del directorio (__dirnameAll)
    console.log(__dirnameAll);
    
    // Retorna la ruta completa del directorio (__dirnameAll)
    return   "/var/task" ;
}

// Exporta la función searchDir como módulo predeterminado
export default searchDir;
