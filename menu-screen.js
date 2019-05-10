// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Adding methods
// - Adding additional fields

class MenuScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;

    const menu = document.querySelector('#choices');
    for(let i of FLASHCARD_DECKS){
      let item = document.createElement('div');
      item.className = 'menu_div';
      item.textContent = i.title;
      item.addEventListener('click', function(){
        app.flashcards.createCards(i.title);
        app.menu.hide();
        app.flashcards.show();
      });
      menu.append(item);
    }
  }

  show() {
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }
}
