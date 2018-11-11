import { bindable, bindingMode } from "aurelia-framework";

export class Switch {
    @bindable({ defaultBindingMode: bindingMode.fromView}) on:String = "On";
    @bindable({ defaultBindingMode: bindingMode.fromView}) off:String = "Off";
    @bindable({ defaultBindingMode: bindingMode.twoWay}) valor:boolean;
}