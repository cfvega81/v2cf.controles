import "materialize-css";
import { View, bindable, bindingMode } from 'aurelia-framework';

export class Fecha  {
    @bindable({defaultBindingMode: bindingMode.fromView}) id: string;
    @bindable({defaultBindingMode: bindingMode.twoWay}) ancho: string = "s12";
    @bindable({defaultBindingMode: bindingMode.twoWay}) descripcion: string = "Etiqueta...";
    @bindable({defaultBindingMode: bindingMode.twoWay}) valor: Date;
    @bindable({defaultBindingMode: bindingMode.twoWay}) icono: string;
    @bindable({defaultBindingMode: bindingMode.twoWay}) formato: string = "dd/mm/yyyy";
    @bindable({defaultBindingMode: bindingMode.twoWay}) valorPredeterminado: Date;

    constructor() {

    }

    attached() {
        var element = document.querySelector("#" + this.id + ".datepicker");
        let options: Partial<M.DatepickerOptions> = {
            format: this.formato,
            showClearBtn: true
        };

        if (this.valor || this.valorPredeterminado) {
            options.defaultDate = this.valor || this.valorPredeterminado;
            options.setDefaultDate = true;
        }
        
        M.Datepicker.init(element, options);
    }

    borrar() {
        this.valor = undefined;
    }
}