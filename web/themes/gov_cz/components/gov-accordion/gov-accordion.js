import '../../js/utils/dom';

import {initAccordions} from "../../js/Accordion/default";

((Drupal) => {
  Drupal.behaviors.chip = {
    attach(context) {
      initAccordions()
    }
  }
})(Drupal);
