import "materialize-css";
import { MenuItem } from "controles/menu-flotante";
import { RouterConfiguration, Router }  from "aurelia-router";

export class App {
  acciones: MenuItem[] = [];
  router: Router;
  fecha: Date;
  fechaInicial: Date = new Date();

  constructor() {

  }

  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = "";
    config.map([
      
    ]);
  }

  attached() {
    M.updateTextFields();
  }
}
