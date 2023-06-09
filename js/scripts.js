// Utility Logic

function isEmpty(testString) {
  return (testString.trim().length === 0);
}

// Business Logic

function wordCounter(text) {
  if (isEmpty(text)) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function (element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function mostCommonWords(text) {
  const textArray = text.split(" ");
  const mostCommonWordsObject = {}
  textArray.forEach(function (element) {
    if (!Number(element)) {
      if (mostCommonWordsObject[element]) {
        mostCommonWordsObject[element]++;
      } else { mostCommonWordsObject[element] = 1 }
    }
  });
  return mostCommonWordsObject
}

function mostCommonWords(text) {
  if (isEmpty(text)) {
    return 0;
  }
  const textArray = text.split(" ");
  const wordCountMap = {};

  textArray.forEach(function (element) {
    if (!Number(element)) {
      if (wordCountMap[element]) {
        wordCountMap[element]++;
      } else {
        wordCountMap[element] = 1;
      }
    }
  });

  return wordCountMap;
}

function isEmpty(text) {
  return text.trim() === "";
}

function countUpBy (num1,num2) {
  let countUpByArray = [];
  for (let i = 0; i <= num2; i += num1) {
      countUpByArray.push(i);
  console.log(i)
  }
  return countUpByArray;


// Example usage:
const text = "Hello world hello world world";
const wordCounts = mostCommonWords(text);
console.log(wordCounts);

// UI Logic

function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function (element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
}

window.addEventListener("load", function () {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});


