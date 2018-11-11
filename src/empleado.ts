export class Empleado {
    Nombre?: string;
    APaterno?: string;

    constructor() {

    }

    static initialize(empleado: Empleado): Empleado {
        let emp = new Empleado();
        if (empleado.Nombre) emp.Nombre = empleado.Nombre;
        return emp;
    }
}


export class AAA {
    constructor() {
        var emplead1 = Empleado.initialize({ Nombre: "Cesar" });
        var emplead2 = Empleado.initialize({ APaterno: "Vega"});
    }
}