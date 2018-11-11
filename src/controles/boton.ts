import { bindable, bindingMode } from "aurelia-framework";

export class Boton {
    @bindable({ defaultBindingMode: bindingMode.twoWay}) color: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay}) descripcion: string = "click me!";
    @bindable({ defaultBindingMode: bindingMode.twoWay}) icono: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay}) accion: Function;
    @bindable({ defaultBindingMode: bindingMode.twoWay}) redondo: boolean;
}