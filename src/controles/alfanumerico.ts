import { bindable, bindingMode } from "aurelia-framework";

export class Alfanumerico {
    @bindable({defaultBindingMode: bindingMode.fromView}) id: string;
    @bindable({defaultBindingMode: bindingMode.twoWay}) ancho: string = "s12";
    @bindable({defaultBindingMode: bindingMode.twoWay}) descripcion: string = "Etiqueta...";
    @bindable({defaultBindingMode: bindingMode.twoWay}) valor: string;
    @bindable({defaultBindingMode: bindingMode.twoWay}) icono: string;
}