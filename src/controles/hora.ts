import "materialize-css";
import { View, bindable, bindingMode } from 'aurelia-framework';

export class Hora  {
    @bindable({defaultBindingMode: bindingMode.fromView}) id: string;
    @bindable({defaultBindingMode: bindingMode.twoWay}) ancho: string = "s12";
    @bindable({defaultBindingMode: bindingMode.twoWay}) descripcion: string = "Etiqueta...";
    @bindable({defaultBindingMode: bindingMode.twoWay}) valor: string;
    @bindable({defaultBindingMode: bindingMode.twoWay}) icono: string;

    constructor() {

    }

    attached() {
        var element = document.querySelector("#" + this.id + ".timepicker");
        var tp = M.Timepicker.init(element, { 
            showClearBtn: true,
            defaultTime: undefined 
        });
        tp.time = this.valor;
    }

    borrar() {
        this.valor = undefined;
    }
}