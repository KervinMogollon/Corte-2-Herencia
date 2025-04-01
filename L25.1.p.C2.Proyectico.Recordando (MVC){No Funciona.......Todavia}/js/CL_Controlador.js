export default class Controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarRecuerdo() {
        this.modelo.procesarRecuerdo(this.vista.iniciarFotografia(), this.vista.iniciarVideo());

        this.vista.reporte(
            this.modelo.montoFinal(),
            this.modelo.promdDigital(),
        )


    }
}