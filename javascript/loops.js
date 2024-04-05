/*
 * This function accepts a deck to deal from (an array of cards),
 * and a hand of cards (another array of cards). It draws from the 
 * deck to the hand until the hand has five cards.
 */
function replenishHand(deck, hand) {
    console.log('replenishHand was called. deck has ' + deck.length + 
                ' cards, and hand has ' + hand.length + ' cards.');
    
    while (hand.length < 5) {
        console.log('Inside the loop');

        let newCard = deck.pop(); // Draw a card from the deck
        console.log('\tnewCard: ', newCard);

        hand.push( newCard ); // Add the drawn card to the hand
        console.log('\tEnd of code block. deck has ' + deck.length + 
                    ' cards, and hand has ' + hand.length + ' cards.');
    }

    return hand; // Return the modified hand
}

// original workout

let monWedWorkout = [
    {name: 'pushups',  reps: 10}, 
    {name: 'crunches', reps: 20}, 
    {name: 'burpees',  reps: 10}
];

function performWorkout(workout) {
    // Repeat for each exercise
    for (let iSet = 0; iSet < workout.length; iSet++) {
        // Get the current exercise
        let exercise = workout[iSet];
        // Repeat n times (reps) for the exercise
        for (let iRep = 1; iRep <= exercise.reps; iRep++) {
            // Count out the reps!
            console.log(exercise.name + ': ' + iRep + '!');
        }
    }
}

performWorkout(monWedWorkout);

// refactored

function performExercise(exercise) {
    // Repeat n times (reps) for the exercise
    for (let i = 1; i <= exercise.reps; i++) {
        // Count out the reps!
        console.log(exercise.name + ': ' + i + '!');
    }
}

function performWorkout(workout) {
    for (let i = 0; i < workout.length; i++) {
        performExercise(workout[i]);
    }
}


