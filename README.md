<!-- README -->
<!-- Tests -->
Describe: beepBoop()

Test 1:  It should subsitute numbers containing 1 with "Beep!"
Code: beepBoop(1, 15, 123456)
Expected Output: "Beep!" "Beep!" "Beep!"

Test 2: It should subsitute numbers containing 2 with "Boop!"
Code: beepBoop(2, 23, 220)
Expected Output: "Boop!" "Boop!" "Boop!"

Test 3: It should subsitute the numbers containing 3 with "Won't you be my neighbor?"
Code: beepBoop(3, 37, 333)
Expected Output: "Won't you be my neighbor?" "Won't you be my neighbor?" "Won't you be my neighbor?"

Test 4: It should return the number itself for numbers not containing 1, 2, or 3
Code: beepBoop(4, 5678, 987654)
Expected Output: 4, 5678, 987654

Test 5: 
Code: beepBoop()
Expected Output:
