/*
RECORDANDO
Una Tienda Fotográfica, ofrece promociones para cubrir sus eventos especiales en videos o
fotografías. Se conoce de cada cliente: su código y costo base. 

Además, se sabe que si la promoción es de Fotografías tendrá un tipo de foto (D: Digital o I: Impresa), 
teniendo en cuenta si es Digital tendrá un descuento del 18% sobre el costo y si las fotos son impresas 
tendrán un incremento del 13%. 

Por otro lado, si la promoción es de videos se debe tomar en cuenta si el
mismo se graba en formato HD (High Definition: SI-NO) de ser así este tendrá un incremento
del 20% sobre el costo. 

La Tienda requiere determinar al final de su jornada laboral: el precio
de cada cliente, el total vendido y el promedio de ventas de promociones de fotos digitales
vendidas.
*/

import mTienda from "./CL_mTienda.js";
import vTienda from "./CL_vTienda.js";
import Controlador from "./CL_Controlador.js";

export default class CL_Main {
    constructor() {
        let modelo = new mTienda(),
            vista = new vTienda(),
            controlador = new Controlador(modelo, vista);

        vista.controlador = controlador

    }
}