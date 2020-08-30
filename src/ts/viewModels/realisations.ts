import ko = require("knockout");
import Router= require("ojs/ojrouter");

class CustomersViewModel {
  click: (input: any) => void;
  realState: ko.Observable<string>;

  constructor() {
    document.addEventListener("backbutton", this.onBackKeyDown, false);
    const real = Router.rootInstance.retrieve();
    console.log(real);
    this.realState = ko.observable(real ? real[0] : "0");
    this.click = (input) => {
      // console.log(input)
      console.log(input.target.id.substring(4, 5));
      this.realState(input.target.id.substring(4, 5));
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
