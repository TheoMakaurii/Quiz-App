/* eslint-disable indent */
/* eslint-disable no-undef, quotes, no-console */

'use strict';

function generateQuestionsString(question){
  // Here we will make the questions string to put in the form.


  return `<input type="radio" id="A" name="questionOne" value="false" required>
  <label for="A"> ${question[0].answers[0]} </label>
  <br>
  <input type="radio" id="B" name="questionOne" value="false">
  <label for="B"> ${question[0].answers[1]} </label>
  <br>
  <input type="radio" id="C" name="questionOne" value="true">
  <label for="C"> ${question[0].answers[2]} </label>
  <br>
  <input type="radio" id="D" name="questionOne" value="false">
  <label for="D"> ${question[0].answers[3]} </label>
  <br>

  <button type="submit" id="submit-button">SUBMIT</button>`;
}

function generateShoppingItemsString(shoppingList) {
  console.log("Generating shopping list element");
  //console.log(shoppingList);
  let questions = shoppingList.questions;
  const items = questions.map((item) => generateItemElement(item));
  
  return items.join("");
}

function generateStartScreenString(store){
  // Here we will return some similar to generateItemElement() function.
  //console.log(store);
  return `<div class="start-screen ">
  <h1>${store.startScreen.title}</h1>
  <button type="button" label="start">START</button>
  <h2>${store.startScreen.header}</h2>
</div>`;
}

function generateQuestionScreenString(database,questions){
  // Here we will return some similar to generateItemElement() function.
  // Takes the value from generateQuestionsString and puts it in the form spot.
  return `<div class="question-screen">
  <span id="score">${STORE.questionsCorrect}/7</span>
  <h2>${STORE.questions[STORE.currentQuestion].name}</h2>
  <div class="box">
      <form class="options">
        ${generateQuestionsString(STORE.questions)}
      </form>
  </div>
</div>`;
}
function generateResponseScreenString(database){
  
  // Response will be two choices, if they get it right, if they get it wrong
  // So do a check for that. 
  if(STORE.questionsRightOrWrong === true){
    let responseCollection = STORE.responses;
    let currentReponseIndex = STORE.currentQuestion-1;
    console.log("true");
    return `<div class="answer-screen" id="">
    <h2> ANSWER SCREEN </h2>
    <h3 id="answer-binary">${responseCollection[currentReponseIndex].responses[0]}</h3>
    <button>Next Question</button>
</div>`;
  } else {
    return `<div class="answer-screen" id="">
    <h2> ANSWER SCREEN </h2>
    <h3 id="answer-binary">${STORE.responses[STORE.currentQuestion-1].responses[1]}</h3>
    <button>Next Question</button>
</div>`;
  }
}
function generateResultScreenString(database){
  // Here we will return some similar to generateItemElement() function.
  // Show how many they got right and generate a unique response based on questionsCorrect
  return "";
}


function generateStartScreen(){
  // render the start screen in the DOM
  // it will take the string from generateStartScreenString
  // and put that in the dom.
  let html = generateStartScreenString(STORE);
  $(`main`).html(html);
}
function generateQuestionScreen(){
  // render the Question screen in the DOM
  // it will take the string from generateQuestionScreenString
  // and put that in the dom.
  //let html =generateQuestionsString(STORE);
  let html = generateQuestionScreenString(STORE,generateQuestionsString);
  $(`main`).html(html);
  handleAnswerSubmit();
}

function generateResponseScreen(){
  // render the response screen in the DOM
  // it will take the string from generateResponseScreenString
  // and put that in the dom.
  let html = generateResponseScreenString(STORE);
  $(`main`).html(html);
}

function generateResultsScreen(){
  // render the result screen in the DOM
  // it will take the string from generateResultsScreenString
  // and put that in the dom.
}

function handleQuizStartButton(){
  //when the userStarts the quiz, render the first question. 
  //console.log("you called handleQuizStartButton the Function");
  $(`button`).on('click', function(){
    console.log("This button is working");
    generateQuestionScreen();
  });
}

function handleAnswerSubmit(){
  // takes the value from getValueFromCheckedAnswer function
  //console.log("you called the submit function!");
  $(`main form button[type="submit"`).on('click', function(event){
    event.preventDefault();
    let userAnswer = getValueFromCheckedAnswer();
    console.log(`userAnswer is ${userAnswer}, the type of it is ${typeof userAnswer}`);

    // increment the currentQuestion counter
    STORE.currentQuestion++;
    console.log(STORE.currentQuestion);
     // checks that value against the actual correct answer
     // changed the value of questionsRightOrWrong to either true or false
    
    if(userAnswer === STORE.questions[STORE.currentQuestion-1].correctAnswer){
      //do something
      STORE.questionsRightOrWrong = true;
      console.log("user has the right answer");
    } else {
      console.log("user has the wrong answer");
      STORE.questionsRightOrWrong = false;
    }
    generateResponseScreen();
  });
  
  // then render the responseScreen
}

function handleNextQuestion(){
  //If a user clicks the next question button, render the nextQuestionScreen();
}

function handleNewItemSubmit() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    console.log('`handleNewItemSubmit` ran');
    const newItemName = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val('');
    addItemToShoppingList(newItemName);
    renderShoppingList();
  });
}


function getValueFromCheckedAnswer(){
  // Find the value of a "checked" radio button
  // shound be something like this 
  // $(`input[name=answers]:checked`).val();
  return $(`input[name="questionOne"]:checked`).val();
}

function getItemIdFromElement(item) {
  return $(item)
    .closest('li')
    .data('item-id');
}



//console.log(STORE.questions[0]);
//console.log(STORE.responses[6]);

// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function main() {
  generateStartScreen();
  handleQuizStartButton();
  
}

// when the page loads, call `handleShoppingList`
$(main);


// Code in the example but we won't need

// const STORE = [
//   {id: cuid(), name: "apples", checked: false},
//   {id: cuid(), name: "oranges", checked: false},
//   {id: cuid(), name: "milk", checked: true},
//   {id: cuid(), name: "bread", checked: false}
// ];

// function toggleCheckedForListItem(itemId) {
//   console.log("Toggling checked property for item with id " + itemId);
//   const item = STORE.find(item => item.id === itemId);
//   item.checked = !item.checked;
// }

// function handleItemCheckClicked() {
//   $('.js-shopping-list').on('click', `.js-item-toggle`, event => {
//     console.log('`handleItemCheckClicked` ran');
//     const id = getItemIdFromElement(event.currentTarget);
//     toggleCheckedForListItem(id);
//     renderShoppingList();
//   });
// }

// function addItemToShoppingList(itemName) {
//   console.log(`Adding "${itemName}" to shopping list`);
//   STORE.push({id: cuid(), name: itemName, checked: false});
// }

// function handleDeleteItemClicked() {
//   $('.js-shopping-list').on('click', `.js-item-delete`, event =>{
//     //console.log('you are clicking delete');
//     const id = getItemIdFromElement(event.currentTarget);
//     for(let i = 0; i < STORE.length; i++){
//       //Looping through each item
//       if(id === STORE[i].id){
//         //If we find that item that matches the id, delete it. 
//         console.log("We found the item!");
//         //console.log(STORE[i]);
//         console.log(i);
//         STORE.splice(i, 1);
//         console.log(STORE);
//       }
//     }
//     renderShoppingList();
//   });

// }