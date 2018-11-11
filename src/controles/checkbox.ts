import { bindable, bindingMode } from "aurelia-framework";

export class Checkbox {
    @bindable({defaultBindingMode: bindingMode.fromView}) id: string;
    @bindable({defaultBindingMode: bindingMode.twoWay}) descripcion: string = "Checkbox";
    @bindable({defaultBindingMode: bindingMode.twoWay}) valor: boolean;

}