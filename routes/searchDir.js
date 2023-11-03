
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export function searchDir() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const __dirnameArray =  __dirname.split("\\");
    __dirnameArray.splice(__dirnameArray.length-1,2);
    const __dirnameAll = __dirnameArray.join("\\");
    console.log("Dirname")
    return __dirnameAll;
}



export default searchDir; 