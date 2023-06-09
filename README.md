# _MrRobogersNeighborhood_

#### By _**Richard Lemmond**_


## Description

_"Mr. Roboger's Neighborhood" is a web application that accepts a numerical input from the user and generates a list from 0 to the inputted number. The list adheres to specific substitution rules: Numbers containing a 1 are replaced with "Beep!", those containing a 2 with "Boop!", and those containing a 3 with "Won't you be my neighbor?". These substitutions follow a defined hierarchy. The application is built using HTML, CSS, and JavaScript, implementing concepts such as loops, arrays, conditionals, and Test-Driven Development. It features an interactive interface, allowing users to continually input new numbers and receive the corresponding list of substitutions._


## GitHub Page Link



## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_


## Setup/Installation Requirements

* _Clone the repository:_ _(https://github.com/RLemmond/MrRobogersNeighborhood.git)_
* _Open the project in your preferred code editor._
* _Launch the index.html file in a web browser._


## Known Bugs

* _There are currently no known bugs or issues with this project._


## License

_This project is not licensed. Feel free to explore, modify, and distribute the code as desired._

Copyright (c) _2023_ _Richard Lemmond_


## Tests

Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the users inputed number"
Code: beepBoop(5)
Expected Output: [0, 1, 2, 3, 4, 5]

Test:  It should subsitute numbers containing 1 with "Beep!"
Code: beepBoop(1, 15, 123456)
Expected Output: ["Beep!" "Beep!" "Beep!"]

Test: It should subsitute numbers containing 2 with "Boop!"
Code: beepBoop(2, 23, 220)
Expected Output: ["Boop!" "Boop!" "Boop!"]

Test: It should subsitute the numbers containing 3 with "Won't you be my neighbor?"
Code: beepBoop(3, 37, 333)
Expected Output: ["Won't you be my neighbor?" "Won't you be my neighbor?" "Won't you be my neighbor?"]

Test: It should return the number itself for numbers not containing 1, 2, or 3
Code: beepBoop(4, 5678, 987654)
Expected Output: [4, 5678, 987654]

Test: "It should substitute numbers containing 3 first, then 2, then 1, regardless of the presence of lower priority numbers"
Code: beepBoop(13, 21, 32)
Expected Output: ["Won't you be my neighbor?", "Boop!", "Won't you be my neighbor?"]

Describe: generateList()

Test: It should generate a list of the subsituted numbers from 0 to the user's number input
Code: generateList(5)
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]

