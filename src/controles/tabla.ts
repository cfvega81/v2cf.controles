import { bindable, bindingMode } from "aurelia-framework";

export class Tabla {
    @bindable({ defaultBindingMode: bindingMode.twoWay}) modelo : TablaModel;

    mostrarValor(dato: any, campo: CampoModel) {
        var valor = dato[campo.propiedad];
        if (campo.formatoFecha || campo.formatoNumerico || campo.formatoBoleano) {
            return this.formatearValor(valor, campo);
        }
        return valor;
    }

    formatearValor(valor: any, campo: CampoModel) {
        var formater;
        switch (campo.tipoDato) {
            case "date":
                formater = new Intl.DateTimeFormat(campo.pais, campo.formatoFecha)
                break;
            case "numeric":
                formater = new Intl.NumberFormat(campo.pais, campo.formatoNumerico);
                break;
            case "boolean":
                formater = new BooleanFormat(campo.formatoBoleano); 
                break;
        }
        return formater.format(valor);
    }
}

export class TablaModel {
    campos: CampoModel[] = [];
    acciones: AccionModel[] = [];
    datos: any[];
}

export class CampoModel {
    titulo: string = "";
    propiedad: string = "";
    pais?: string = "";
    tipoDato?: string = "";
    color?: string;
    formatoFecha?: Intl.DateTimeFormatOptions;
    formatoNumerico? : Intl.NumberFormatOptions;
    formatoBoleano? : BooleanFormatOptions;
}

export class BooleanFormat {
    constructor(private options: BooleanFormatOptions) {
        this.options.tipo = this.options.tipo || BooleanDisplayType.text;
    }

    format(valor: boolean): any {
        switch (this.options.tipo) {
            case BooleanDisplayType.text:
                return valor ? this.options.textTrue : this.options.textFalse;
            case BooleanDisplayType.icon:
                var icon = document.createElement("i");
                icon.classList.add("material-icons");
                if (this.options.colorTrue) {
                    var clases = valor ? this.options.colorTrue.split(" ") : this.options.colorFalse.split(" ");
                    clases.forEach(clase => icon.classList.add(clase));
                }
                icon.innerText = valor ? this.options.iconTrue : this.options.iconFalse;
                return icon.outerHTML;
        }
    }
}

export interface BooleanFormatOptions {
    tipo?: BooleanDisplayType;
    textTrue?: string;
    textFalse?: string;
    iconTrue?: string;
    iconFalse?: string;
    colorTrue?: string;
    colorFalse?: string;
}

export enum BooleanDisplayType {
    text = 1,
    icon = 2
}

export class AccionModel {
    titulo: string;
    icono: string;
    color: string;
    ejecutar: Function;
}