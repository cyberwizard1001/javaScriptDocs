function wordBlanks(noun,adjective,word,adverb){
    var result = "";

    result+= "The " + adjective + " " + noun + " " + word + " to the store " + adverb + ".";

    return result;
}


console.log(wordBlanks("dog","big","ran","quickly"));
console.log(wordBlanks("bike","slow","flew","slowly"));

