import ko = require("knockout");
import Router = require("ojs/ojrouter");

class CustomersViewModel {
  click: (input: any) => void;
  realState: ko.Observable<string>;
  compArray: string[];
  redirect: (input: any) => void;

  constructor() {
    document.addEventListener("backbutton", this.onBackKeyDown, false);
    this.compArray = ["index", "Algorithme et Structure de Données", "Base de Données", "Développement Web", "Gestion de Projet", "Ingénierie du logiciel", "Autonomie", "Curiosité", "Esprit d'équipe", "Initiative", "Gourmet"];
    const real = Router.rootInstance.retrieve();
    if (real) {
      Router.rootInstance.store([0]);
    }
    this.realState = ko.observable(real ? real[0] : "0");
    window.scrollTo(0,0);
    this.click = (input) => {
      // console.log(input)
      console.log(input.target.id.substring(4, 5));
      this.realState(input.target.id.substring(4, 5));
      window.scrollTo(0,0);
    }

    this.redirect = (input) => {
      console.log(input.target.textContent.trim())
      Router.rootInstance.store([this.compArray.indexOf(input.target.textContent.trim())]);
      Router.rootInstance.go("competences");
    }

  }

  private onBackKeyDown = () => {
    console.log('backbutton')
    if (this.realState() != "0") {
      this.realState("0");
      return false;
    }
  }

  /**
   * Optional ViewModel method invoked after the View is inserted into the
   * document DOM.  The application can put logic that requires the DOM being
   * attached here.
   * This method might be called multiple times - after the View is created
   * and inserted into the DOM and after the View is reconnected
   * after being disconnected.
   */
  connected(): void {
    // implement if needed
  }

  /**
   * Optional ViewModel method invoked after the View is disconnected from the DOM.
   */
  disconnected(): void {
    // implement if needed
  }

  /**
   * Optional ViewModel method invoked after transition to the new View is complete.
   * That includes any possible animation between the old and the new View.
   */
  transitionCompleted(): void {
    // implement if needed
  }
}

export default CustomersViewModel;
