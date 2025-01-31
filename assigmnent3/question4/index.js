let str = "Once upone time. There was a king. king was very kind hearted person";

let vowelCount = 0;
let consonantCount = 0;

for (let i = 0; i < str.length; i++) {
  let char = str[i].toLowerCase();

  if (char.match(/[a-z]/i)) {
    if (char.match(/[aeiou]/i)) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }
}

console.log("String: ", str);
console.log("Vowel Count: ", vowelCount);
console.log("Consonant Count: ", consonantCount);

