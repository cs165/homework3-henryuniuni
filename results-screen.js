// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Adding methods
// - Adding additional fields

class ResultsScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
    document.querySelector('.to-menu').addEventListener('click', function() {
      document.querySelector('.correct').textContent = '';
      document.querySelector('.incorrect').textContent = '';
      correctCnt = 0;
      wrongCnt = 0;
      app.flashcards.wrongCards_1 = [];
      app.flashcards.wrongCards_2 = [];
      app.results.hide();
    	app.flashcards.hide();
    	app.menu.show();
    }, false);
  }

  show(numberCorrect, numberWrong) {
    let percentage = Math.round(numberCorrect / (numberCorrect + numberWrong) * 100);
    let button = document.querySelector('.continue');
    document.querySelector('.percent').textContent = percentage;
  	document.querySelector('#results .correct').textContent = numberCorrect;
    document.querySelector('#results .incorrect').textContent = numberWrong;
    if(percentage === 100){
      button.textContent = 'Start Over?';
      button.addEventListener('click', function(){
        document.querySelector('.correct').textContent = '';
        document.querySelector('.incorrect').textContent = '';
        correctCnt = 0;
        wrongCnt = 0;
        app.flashcards.createCards(app.flashcards.currentUse);
        app.results.hide();
        app.flashcards.show();
      });
    }
    else{
      button.textContent = 'Continue';
      button.addEventListener('click', function(){
        document.querySelector('.incorrect').textContent = '';
        wrongCnt = 0;
        app.flashcards.cardsValue = [app.flashcards.wrongCards_1 , app.flashcards.wrongCards_2];
        console.log(app.flashcards.cardsValue[0].length + ',' + app.flashcards.totalCard);
        app.flashcards.wrongCards_1 = [];
        app.flashcards.wrongCards_2 = [];
        app.flashcards.totalCard = 0;
        app.results.hide();
        app.flashcards.show();
      });
    }
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }
}
