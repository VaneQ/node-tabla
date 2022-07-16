import { writeFileSync } from 'fs'
import  colors  from 'colors'


const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) =>{

    try{
        

        let salida = ''

        for ( let i = 1; i <= hasta; i++) {
            salida += `${base} * ${i} = ${base * i}\n`   
        }

        if(listar){

            console.log("============================".blue)
            console.log('      Tabla del:'.blue, base,'   '.blue)
            console.log("============================".blue)
            console.log(salida.rainbow)

        } 

        writeFileSync(`./files/tabla-${base}.txt`, salida)
    
        return `tabla-${ base }.txt`;
    }
    catch(err){
        throw err;
    }

}

// module.exports = {
//     crearArchivo
// }
export default crearArchivo;