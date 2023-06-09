Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, Text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Describe: omitOffensiveWords

Test: "It should omit offensive words from a text passage"
Code:
const text = "Zoinks! I think the muppeteer and the biddaroni ran over the loopdaloop!";
const expected = "I think the and the ran over the!";
const result = omitOffensiveWords(text);
Expected Output: expect(result).toEqual(expected);



  // Business Logic

  function removeOffensiveWords (text) {
    const offensiveWordsArray = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
    const textArray = text.split(" ");

    let cleanTextArray = [];

    textArray.forEach(function (word) {
      const lowerCaseWord = word.toLowerCase();
      if (!offensiveWordsArray.includes(lowerCaseWord)) {
        cleanTextArray.push(word);
      }
    });

    return cleanTextArray.join(" ");
  }


test: "If an empty strinf is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
numberOfOccurencesInText(word, text);
Expected Output: 0