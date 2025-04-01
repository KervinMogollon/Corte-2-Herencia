export default class vVideo{
    constructor(){
        this.inCod = document.getElementById("videoForm_inCod");
        this.inCostoBase = document.getElementById("videoForm_inCostoBase");
        this.inFormato = document.getElementById("videoForm_inFormato");
        this.btProcesar = document.getElementById("video_btProcesar");
    }

    get cod(){
        return inCod.value;
    }

    get costoBase(){
        return +inCostoBase.value;
    }

    get formato(){
        return inFormato.value;
    }
}