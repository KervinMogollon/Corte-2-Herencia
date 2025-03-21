import CL_Persona from "./CL_Persona.js";

export default class CL_Administrativo extends CL_Persona {
    constructor(nombre, edad, nivelEstud) {
        super(nombre, edad);
        this.nivelEstud = nivelEstud;
    }

    bonoNivel() {
        switch (this.nivelEstud) {
            case 1: {
                if (this.edad >= 18)
                    return 50
                else 0
            };
                break;
            case 2: {
                if (this.edad >= 18)
                    return 100
                else 0
            };
                break;
            case 3: {
                if (this.edad >= 18)
                    return 100
                else 0
            };
                break;
            default: 0
        }
    }

    sueldoFi(){
        return this.sueldoBase() + this.bonoNivel()
    }
}