var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var gameModel = new Schema({
    playerSequence:         {type: Array, default: ["playerOne","playerTwo","playerThree","playerFour"]},
    playerType: {
        playerOne:          {type: Boolean, default: false},
        playerTwo:          {type: Boolean, default: false},
        playerThree:        {type: Boolean, default: false},
        playerFour:         {type: Boolean, default: false}
    },
    playerCards: {
        playerOne:          {type: Array},
        playerTwo:          {type: Array},
        playerThree:        {type: Array},
        playerFour:         {type: Array},
    },
    predictedScore: {
        playerOne:          {type: Number},
        playerTwo:          {type: Number},
        playerThree:        {type: Number},
        playerFour:         {type: Number}
    },
    currentScore: {
        playerOne:          {type: Number},
        playerTwo:          {type: Number},
        playerThree:        {type: Number},
        playerFour:         {type: Number}
    },
    currentRound:           {type: Number, default: 1 },
    trump:                  { type: String },
    rounds:                 {
                                1 : { playerOne: {type: String}, playerTwo: { type: String},
                                    playerThree: { type: String}, playerFour:{ type: String} },
                                2 : { playerOne: {type: String}, playerTwo: { type: String},
                                    playerThree: { type: String}, playerFour:{ type: String} },
                                3 : { playerOne: {type: String}, playerTwo: { type: String},
                                    playerThree: { type: String}, playerFour:{ type: String} },
                                4 : { playerOne: {type: String}, playerTwo: { type: String},
                                    playerThree: { type: String}, playerFour:{ type: String} },
                                5 : { playerOne: {type: String}, playerTwo: { type: String},
                                    playerThree: { type: String}, playerFour:{ type: String} },
                                6 : { playerOne: {type: String}, playerTwo: { type: String},
                                    playerThree: { type: String}, playerFour:{ type: String} },
                                7 : { playerOne: {type: String}, playerTwo: { type: String},
                                    playerThree: { type: String}, playerFour:{ type: String} },
                                8 : { playerOne: {type: String}, playerTwo: { type: String},
                                    playerThree: { type: String}, playerFour:{ type: String} },
                                9 : { playerOne: {type: String}, playerTwo: { type: String},
                                    playerThree: { type: String}, playerFour:{ type: String} },
                                10 : { playerOne: {type: String}, playerTwo: { type: String},
                                    playerThree: { type: String}, playerFour:{ type: String} },
                                11 : { playerOne: {type: String}, playerTwo: { type: String},
                                    playerThree: { type: String}, playerFour:{ type: String} },
                                12 : { playerOne: {type: String}, playerTwo: { type: String},
                                    playerThree: { type: String}, playerFour:{ type: String} },
                                13 : { playerOne: {type: String}, playerTwo: { type: String},
                                    playerThree: { type: String}, playerFour:{ type: String} }
                                }
});

gameModel.methods.assign_cards = function(){
    this.playerCards.playerOne = ["d_6" , "d_10", "d_7", "h_7", "c_K", "s_5", "h_5", "c_8", "h_A", "h_9", "d_2", "c_4", "d_8"];
    this.playerCards.playerTwo = [ "d_3", "d_9", "s_7", "s_4", "h_2", "d_4", "d_K", "c_3", "d_Q", "h_Q", "s_9", "c_10", "c_2"];
    this.playerCards.playerThree = ["h_6", "h_8", "s_6", "d_J", "h_J", "h_10", "c_J", "s_Q", "c_6", "c_A", "s_8", "s_3", "h_K"];
    this.playerCards.playerFour = ["s_10", "s_2", "c_9", "s_K", "c_5", "s_J", "h_4", "c_Q", "d_5", "s_A", "c_7", "h_3", "d_A"];
 }

gameModel.methods.increment_currentRound = function(){
    this.currentRound += 1
}

gameModel.methods.set_trump = function(){
    this.trump = "s"            // Setting to spade for now
}
module.exports = mongoose.model('Game', gameModel);
