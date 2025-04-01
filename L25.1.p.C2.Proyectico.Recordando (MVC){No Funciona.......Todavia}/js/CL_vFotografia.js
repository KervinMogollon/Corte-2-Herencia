export default class vFotografia{
    constructor(){
        this.inCod = document.getElementById("fotoForm_inCod");
        this.inCostoBase = document.getElementById("fotoForm_inCostoBase");
        this.inTipo = document.getElementById("fotoForm_inTipo");
        this.btProcesar = document.getElementById("fotoForm_btProcesar");
    }

    get cod(){
        return inCod.value;
    }

    get costoBase(){
        return +inCostoBase.value;
    }

    get tipo(){
        return inTipo.value;
    }
}