import ko = require("knockout");
import Router = require("ojs/ojrouter");
import Root from "../root";

class IncidentsViewModel {
  click: (input: any) => void;
  compState: ko.Observable<string>;
  redirect: (input: any) => void;
  realArray: string[];
  redirectComp: () => void;

  constructor() {
    this.realArray = ["index", "Calendrier Logistique", "Factory", "Bubble Up", "Big Browser", "Dungeon", "DobberMiam", "D&D Apps"];
    const comp = Router.rootInstance.retrieve();
    if (comp) {
      Router.rootInstance.store([0]);
    }
    this.compState = ko.observable(comp ? comp[0] : "0");
    window.scrollTo(0,0);
    this.click = (input) => {
      // console.log(input)
      console.log(input.target.id.substring(4, 5));
      this.compState(input.target.id.substring(4, 5));
      window.scrollTo(0,0);
    }

    this.redirect = (input) => {
      const link = input.target.textContent.trim() ? input.target.textContent.trim() : input.target.nextSibling.textContent.trim();
      console.log(link)
      Router.rootInstance.store([this.realArray.indexOf(link)]);
      Router.rootInstance.go("realisations");
    }
    
    this.redirectComp = () => {
      this.compState("2")
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

export default IncidentsViewModel;
