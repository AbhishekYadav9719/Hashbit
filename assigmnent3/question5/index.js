function correctfn(string, wrong, correct) {
    return string.replace(new RegExp(wrong, 'g'), correct);
  }
  
  
  let sentence = "I want to go Agra to sea the taj";
  let wrongWord = "sea";
  let correctWord = "see";
  
  let correctedSentence = correctfn(sentence, wrongWord, correctWord);
  console.log(correctedSentence);  
  
  
  