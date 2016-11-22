// WORK IN COSOLE TO START
//
// var $gameBoard = $('#gameboard');
// var $bankRoll = $('#bankroll');
// var $dealerCard = $('#dealercard');
// var $playerCard = $('#playercard');
// var $dealerTotal = $('#dealertotal');
// var $playerTotal = $('#playertotal');
// var $bust = $('#bust_id');
// var $win = $('#win_id');
// var $lose = $('#lose_id');
// var $tie = $('#tie_id');
// var $suits = $('#suits');



// making constructor function for each card that will be used to assign suit and rank later
var Card = function (rank, suit, value) {
    this.rank = rank;
    this.suit = suit;
    // this.value = value;
};
   // making a constructor function for the deck of cards which will include methods to make the deck and shuffle it
var Deck = function () {
 this.deck = [];
// method to make the deck
 this.makeDeck = function () {
// setting arrays suits, ranks to contain each respective value... ranks literally is the value
  var suits = ['hearts', 'spades', 'diamonds', 'clubs'];
  var ranks = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
// for loop applying suits and ranks to each card four times, then pushing it the deck array via our card constructor object
  for (var i = 0; i < suits.length; i++) {
    // console.log(suits[i]);
    for (var r = 0; r < ranks.length; r++) {
      // console.log(ranks[r]);
      this.deck.push(new Card(ranks[r], suits[i]));
     }
   }
 }; //end make deck function

// Fisher-Yates shuffle algorithm
this.shuffle = function() {
   for (i = this.deck.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this.deck[i];
        this.deck[i] = this.deck[j];
        this.deck[j] = temp;
    }
    return this.deck;
 } //end shuffle function
// deal method
//   this.deal = function () {
// //  use Math.floor and Math.random to recieve a random whole integer from the deck and set to variable cardDealt.
//     var cardDealt = Math.floor(Math.random() * this.deck.length); //change to .pop or .shift
//   // .splice tell us to remove the card dealt from the deck array and to only remove that element.
// //     this.deck.splice(cardDealt, 1);
// //     return this.deck[cardDealt];
// //   } //end deal function
  // }
};
var deck1 = new Deck();
deck1.makeDeck();
console.log(deck1.deck.length);

deck1.shuffle();
console.log(deck1.deck);

// creating a player object
var player = {
  hand: [],
// method for getting sum of player hand
  playerHandSum: function () {
      var sum = 0;
      //need another loop here
      // Object.keys(player).forEach(function(key){
      //   var value = player[key];
      //   console.log(value);
      // for (var a = 0; a < player.hand.length; a++) {
        for (var i = 0; i < this.hand.length; i++){
        sum += this.hand[i]; //may have to put = behind +
        }
      // }

  return sum;
// })
  },
// method for player to hit
  playerHit: function () {
      var hitCard = deck1.deck.pop();
      this.hand.push(hitCard);
      //add event listener ("click", ...)
  },
    //playerStay: function () {
      //add event listener("click", player stays... switch to dealer)
  // },


  // playerBust:function () {
  //     if (playerHandSum > 21) {
  //       return alert("Bust");
  //     }
  //   },

  // player21: function (){
      // if (playerHandSum() = 21) {
      //   return alert("Blackjack, You Win");
//       }
// }
}
// calling dealer function only when appropiate
console.log(player);
// console.log(player.playerHandSum(player.hand));
player.playerHit();
player.playerHit();

// });
// player.Bust();
console.log(player.playerHandSum());
// console.log(player.playerHandSum());

// var dealer = {
//     hand: []
//     // dealerHandSum: function () {
//     // for (var i = 0; i < this.hand.length; i++){
        //   sum += this.hand[i]; //may have to put = behind +
        // }
//     // // },
// dealer must hit to certain number
       //dealerHit:  function () {
       //       var hitCard1 = deck1.deck.pop();
       //       this.hand.push(hitCard1);
  //     },

//
          // dealerBust: function () {
          //   if (dealerHandSum > 21) {
          //     return alert("Bust");
          //   }
          //  },
//
//     // dealer21: function (){
//     //   if (dealerHandSum() = 21) {
//     //     return alert("Blackjack, Dealer Wins");
//     //   }
//     // }
//
//
// }

//
// var Bank = {
//
//   bankStart: 200,
//   playerBet: 10,
//   dealerBet: 10,
//
//   makeBet: funtion() {
//
//   }
//
//
//
//
//
//
// }












// psuedo code below
//
// set varibles for
// gameboard
// deck
// bankroll
// dealerCard
// playerCard
// dealerTotal
// playerTotal
// reloadGame
// bust
// win
// lose
// tie
// messages you win and you lose
//
//
// set functions(maybe constructor objects) for
// deal
// bet
// score
//
//
// use if else statements for
// player to dealer totals including: bust, tie, win, lose
//
//
// jquery methods/java functions
// Math.random - to generate random cards when drawn
// Math.floor - get rid of any decimals
// event listeners for buttons like hit, stand, deal, bet
// set interval - dealer: stand or bust
//
//
// notes
// heavy usage of object oriented programming and jquery
//
// psedo code
// 1)function reset
// 2)function deal
// 3)clear totals
// 4)bet
// 5)player hits or
// 6)player stands
// 7)instructions for dealer: stand or bust
// 8)player win or lose
// 9)reloadGame
// 10)deal and repeat
//
// window.onload
// $(function() {
//    // code inside jQuery window onload
// }
// this: $(this)
//
//
//
// append elements: jQueryElement.append( jQueryElement )
//
// get the parent of an element: jQueryElement.parent()
//
// get child elements: jQueryElement.children()
//
// set an event listener: jQueryElement.on('click', function() {} )
//
// click listener: jQueryElement.click( function() {} )
//
// get value from input box after click: $('#idName').val()
//
// prepend elements: jQueryElement.prepend( jQueryElement )
//
// remove elements: jQueryElement.remove()
//
// set text inside element: jQueryElement.text("some text")
//
// set html inside element: jQueryElement.html("<some html>")
//
// check if element has a class: jQueryElement.hasClass('someClass')
//
// remove a class from an element: jQueryElement.removeClass('someClass');
//
// empty an element of content: jQueryElement.empty()
//
// set a css property on an element: jQueryElement.css('property', 'value')
//
// clone an element: jQueryElement.clone()
//
// append an element with the order reversed: jQueryElement.appendTo(jQueryElement )
//
// get a specific jQuery element from a list: jQueryCollection.eq(indexNum )
