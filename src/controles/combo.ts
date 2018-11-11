import "materialize-css";
import { bindable, bindingMode } from "aurelia-framework";

export class Combo {
    @bindable({defaultBindingMode: bindingMode.twoWay}) permitirNulo: boolean = true;
    @bindable({defaultBindingMode: bindingMode.fromView}) id: string;
    @bindable({defaultBindingMode: bindingMode.fromView}) ancho: string = "s12";
    @bindable({defaultBindingMode: bindingMode.fromView}) seleccioneTexto: string = "Seleccione...";
    @bindable({defaultBindingMode: bindingMode.fromView}) descripcion: string = "Combo de Seleccion";
    @bindable({defaultBindingMode: bindingMode.twoWay}) llave: string = "key";
    @bindable({defaultBindingMode: bindingMode.twoWay}) texto: string = "value";
    @bindable({defaultBindingMode: bindingMode.twoWay}) valor: any;
    @bindable({defaultBindingMode: bindingMode.twoWay}) opciones: any[];

    attached() { 
        var el = document.querySelector("select#" + this.id);
        M.FormSelect.init(el);
    }
}