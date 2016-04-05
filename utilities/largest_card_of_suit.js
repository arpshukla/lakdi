var _ = require('lodash');

var largest_card_of_suit = function(cards, suit){
    var suit_cards = _.filter(cards , function(card){
        return _.startsWith(card, suit);
    });
    var sorted_suit_cards = _.sortBy(suit_cards, function(card){
        return priority_table(card.split("_")[0])
    });
    return _.last(sorted_suit_cards);
}

module.exports = largest_card_of_suit
