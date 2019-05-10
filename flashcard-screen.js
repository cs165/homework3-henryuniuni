// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Rewriting some of the existing methods, such as changing code in `show()`
// - Adding methods
// - Adding additional fields

class FlashcardScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
    //this.cardsNumber = 0;
    this.cardsValue = [];
    this.wrongCards_1 = [];
    this.wrongCards_2 = [];
    this.totalCard = 0;
    this.currentUse = null;
  }

  show() {
    const flashcardContainer = document.querySelector('#flashcard-container');
    flashcardContainer.innerHTML = "";
    new Flashcard(flashcardContainer, this.cardsValue[0][this.totalCard], this.cardsValue[1][this.totalCard]);
    this.containerElement.classList.remove('inactive');
    //const card = new Flashcard(flashcardContainer, 'word', 'definition');
  }

  hide() {
    this.containerElement.classList.add('inactive');
    this.cardsValue = [];
    this.totalCard = 0;
  }

  createCards(name){
    const flashcardContainer = document.querySelector('#flashcard-container');
    for(let i of FLASHCARD_DECKS){
        //console.log(i.title);
      if(name == i.title){
        console.log(name);
        this.currentUse = name;
        this.cardsValue = [Object.keys(i.words), Object.values(i.words)];
      }
    }
  }
}
