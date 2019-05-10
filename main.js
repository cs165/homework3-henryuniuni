// TODO(you): Modify the file in whatever ways necessary to implement
// the flashcard app behavior.
const app = new App();

let drag = false;
let originX = null;
let originY = null;
let offsetX = 0;
let offsetY = 0;
let angle = 0;
let correctCnt = 0;
let wrongCnt = 0;

function startDrag(event){
    originX = event.clientX;
    originY = event.clientY;
    console.log(originX + ',' + originY);
    event.currentTarget.setPointerCapture(event.pointerId);
    drag = true;
}

function Drag(event){
    if(!drag){
        return;
    }
    event.preventDefault();
    offsetX = event.clientX - originX;
    offsetY = event.clientY - originY;
    angle = 0.2*(event.clientX - originX);
    event.currentTarget.style.transform = 'translate(' + offsetX + 'px,' + offsetY + 'px)';
    event.currentTarget.style.transform += 'rotate(' + angle + 'deg)';
    if (offsetX > 150 || offsetX < -150) {
        document.body.style.backgroundColor = '#97b7b7';
    } 
    else {
        document.body.style.backgroundColor = '#d0e6df';
    }
}

function endDrag(event){
    document.body.style.backgroundColor = '#d0e6df';
    drag = false;
    if (offsetX > 150 || offsetX < -150) {
        let correctNum = document.querySelector('.correct');
        let wrongNum = document.querySelector('.incorrect');
        if(offsetX > 150){ //right
            correctCnt += 1;
            correctNum.textContent = correctCnt;
        }
        else{   //wrong
            app.flashcards.wrongCards_1.push(app.flashcards.cardsValue[0][app.flashcards.totalCard]);
            app.flashcards.wrongCards_2.push(app.flashcards.cardsValue[1][app.flashcards.totalCard]);
            wrongCnt += 1;
            wrongNum.textContent = wrongCnt;
        }
        app.flashcards.totalCard += 1;
        if(app.flashcards.totalCard === app.flashcards.cardsValue[0].length){
            app.flashcards.hide();
            console.log(correctCnt + ',' + wrongCnt);
            app.results.show(correctCnt, wrongCnt);
        }
        else{
            app.flashcards.show();
        }
    } 
    else {
        event.currentTarget.style.transform = 'translate(0px,0px)';
        event.currentTarget.style.transform = 'rotate(0 deg)';
    }
}