/* eslint-disable indent, no-undef, quotes*/
'use strict';

const STORE = {
    currentQuestion: 0,
    questionsCorrect: 0,
    questionsRightOrWrong: false,
    startScreen: {
        title: `Do you have what it takes to be America's Next top Magician?`,
        header: `Take this quiz and find out!`
    },
    questions: [
        {
            name: "In your opinion, which of these is the ideal pet?",
            answers: ["Dog", "Cat", "Rabbit","Snake"],
            correctAnswer: true
        },
        {
            name: "Choose a color, ANY color.",
            answers: ["Black", "Brown", "Periwinkle","White"],
            correctAnswer: true
        },
        {
            name: "Where do you keep your scarves?",
            answers: ["In your closet.", "Around your neck.", "Up my sleeve.","You don't have a scarf."],
            correctAnswer: true
        },
        {
            name: "What is your magic weapon of choice?",
            answers: ["Hammer", "Baseball Bat", "Wand","Sword"],
            correctAnswer: true
        },
        {
            name: "What are the suits in deck?",
            answers: ["Ace, Spade, Club, Heart", "Ex, Oh, Ex, Oh", "Diamond, Spade, Club, Heart","Circle, Square, Triangle, Cross"],
            correctAnswer: true
        },
        {
            name: "Where are you most comfortable?",
            answers: ["In Bed.", "In the streets.", "On stage","On a tropical island."],
            correctAnswer: true
        },
        {
            name: "What is your prestige?",
            answers: ["Landing on the moon.", "Climbing Mount Everest", "Sawing a woman in half","What is a prestige, again?"],
            correctAnswer: true
        },
    ],
    responses:[
        {
            name: "response1 (This is an internal name, we won't have to use this value.)",
            responses: [`Voila! Of course a Magician would never be caught without a rabbit in their hat!`, ` Other pets are fine for the less magically inclined, but a true magician always has a furry friend in his hat.`],
            image: "magic rabbit.jpg"
        },
        {
            name: "response2 (This is an internal name, we won't have to use this value.)",
            responses: [`A magician has many favorite colors. You have great taste, too!`, `Wow! You are so boring. A magician would never be caught dead in brown!`],
            image:"magician outfit.jpg"
        },
        {
            name: "response3 (This is an internal name, we won't have to use this value.)",
            responses: [`Amazing! You are already performing magic! I love your scarf.`, `That is a sensible answer. However, it is not a very magical way to store your scarf.`]
        },
        {
            name: "response4 (This is an internal name, we won't have to use this value.)",
            responses: [`Abra kadabra! The wand is a perfect tool for wielding the magical elements. Impressive!`, `Ohhh... You seem to be pretty violent. Not exactly what we were looking for...`]
        },
        {
            name: "response5 (This is an internal name, we won't have to use this value.)",
            responses: [`Wow!! Thats right.`, `Not quite! A magician NEEDS to know every suit in a deck if they want to make cards appear from thin air!`]
        },
        {
            name: "response6 (This is an internal name, we won't have to use this value.)",
            responses: [`Very nice! Sounds like an excellent spot to wow an audience!`, `While you are relaxing, there is a whole world of people that is being left unimpressed. Shame on you.`]
        },
        {
            name: "win/lose screen",
            responses: [`HOW DID YOU DO THAT? Oh right, a magician never reveals their secret.`, `I'm sure your mother is very proud.`]
        },

    ],
    result:{
        title: "TOTAL SCORE",
        response:['HOW DID YOU DO THAT? Oh right, a magician never reveals their secret.','Im sure your mother is very proud.']
    }
};