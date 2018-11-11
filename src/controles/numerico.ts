import { bindable, bindingMode } from "aurelia-framework";
import { Key } from "./key";

export class Numerico {
    @bindable({defaultBindingMode: bindingMode.fromView}) id: string;
    @bindable({defaultBindingMode: bindingMode.twoWay}) ancho: string = "s12";
    @bindable({defaultBindingMode: bindingMode.twoWay}) descripcion: string = "Etiqueta...";
    @bindable({defaultBindingMode: bindingMode.twoWay}) valor: number;
    @bindable({defaultBindingMode: bindingMode.twoWay}) icono: string;

    validar(event: KeyboardEvent) {
        switch(event.key) {
            case Key.Delete:
            case Key.Backspace:
            case Key.ArrowLeft:
            case Key.ArrowRight:
                return true;
        }
        var number = Number.parseInt(event.key, 0);
        if (Number.isNaN(number)) {
            return false;
        }
        return true;
    }
}