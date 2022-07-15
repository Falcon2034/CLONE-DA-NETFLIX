 class Accordion{
     constructor(accordionListQuestions) { 
  this.accordionListQuestions = document.querySelectorAllO();
  (accordionListQuestions);
  this.activeItemClass = "active";
}

  toggleAcordion(item) {
    item.classList.toggle(this.activeItemClass);
    item.nextElementSibling.classList.toggle(this.activeItemClass);
  }

addAcordionEvent() {
  this.accordionListQuestions.forEach((question) => {
      question.addEventListener("click", () => this.toggleAcordion (question));
    
  });
}

  init() {
    if(this.accordionListQuestions.length) {
      this.addAcordionEvent();  
  }
      return this;
  }
}

const Accordion = new Accordion(".faq-question");
accordion.init();