import "materialize-css";
import { bindable, bindingMode } from "aurelia-framework";

export class MenuFlotante {
    @bindable({defaultBindingMode: bindingMode.fromView}) icono: string = "mode_edit";
    @bindable({defaultBindingMode: bindingMode.fromView}) color: string = "red";
    @bindable({defaultBindingMode: bindingMode.twoWay}) acciones: MenuItem[];

    attached() {
        var elements = document.querySelectorAll(".fixed-action-btn");
        M.FloatingActionButton.init(elements);
        var elems = document.querySelectorAll(".tooltipped");
        M.Tooltip.init(elems);
    }
}

export class MenuItem {
    color: string = "blue";
    icono: string = "mode_edit";
    descripcion: string = "accion";
    accion: Function;
}