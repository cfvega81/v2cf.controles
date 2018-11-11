import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    "../controles/alfanumerico",
    "../controles/numerico",
    "../controles/checkbox",
    "../controles/fecha",
    "../controles/hora",
    "../controles/switch",
    "../controles/menu-flotante",
    "../controles/combo",
    "../controles/boton",
    "../controles/tabla"
  ]);
}
