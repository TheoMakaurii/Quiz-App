/* eslint-disable no-undef, quotes, no-console */

'use strict';

function generateQuestionsString(database){
  // Here we will make the questions string to put in the form.
}

function generateShoppingItemsString(shoppingList) {
  console.log("Generating shopping list element");
  //console.log(shoppingList);
  let questions = shoppingList.questions;
  const items = questions.map((item) => generateItemElement(item));
  
  return items.join("");
}

function generateStartScreenString(database){
  // Here we will return some similar to generateItemElement() function.
  return "";
}

function generateQuestionScreenString(database,questions){
  // Here we will return some similar to generateItemElement() function.
  // Takes the value from generateQuestionsString and puts it in the form spot.
  return "";
}
function generateResponseScreenString(database){
  // Here we will return some similar to generateItemElement() function.
  // Response will be two choices, if they get it right, if they get it wrong
  // So do a check for that. 
  return "";
}
function generateResultScreenString(database){
  // Here we will return some similar to generateItemElement() function.
  // Show how many they got right and generate a unique response based on questionsCorrect
  return "";
}

function generateItemElement(item) {
  return `
    <li data-item-id="${item.id}">
      <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
}

function generateStartScreen(){
  // render the start screen in the DOM
  // it will take the string from generateStartScreenString
  // and put that in the dom.
}
function generateQuestionScreen(){
  // render the Question screen in the DOM
  // it will take the string from generateQuestionScreenString
  // and put that in the dom.
}

function generateResponseScreen(){
  // render the response screen in the DOM
  // it will take the string from generateResponseScreenString
  // and put that in the dom.
}

function generateResultsScreen(){
  // render the result screen in the DOM
  // it will take the string from generateResultsScreenString
  // and put that in the dom.
}

function renderShoppingList() {
  // render the shopping list in the DOM
  console.log('`renderShoppingList` ran');
  const shoppingListItemsString = generateShoppingItemsString(STORE);

  // insert that HTML into the DOM
  $('.js-shopping-list').html(shoppingListItemsString);
}



function handleQuizStart(){
  //when the userStarts the quiz, render the first question. 
}

function handleAnswerSubmit(){
  // takes the value from getValueFromCheckedAnswer function
  // checks that value against the actual correct answer
  // increment the currentQuestion counter
  // changed the value of questionsRightOrWrong to either true or false
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
}

function getItemIdFromElement(item) {
  return $(item)
    .closest('li')
    .data('item-id');
}



console.log(STORE.questions[0]);
console.log(STORE.responses[6]);

// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function main() {
  renderShoppingList();
  handleNewItemSubmit();
  //handleItemCheckClicked();
  //handleDeleteItemClicked();
  
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