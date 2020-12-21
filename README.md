# advent-of-code-2020

Day 1:
For this challenge we were asked to locate two numbers in a given list that added up to 2020.
Once these two numbers were located we were to provide the product of these two numbers. Part 2:
Part 2 upgraded the challenge to requiring three numbers in the list that added up to 2020 and
returning their product. I began by creating a nested for loop. Since each number only appears once,
every combination of three numbers that add up to 2020 would begin with 1, 2 and 2017 and end at 2017, 2, 1.
so I iterated through every combination of numbers until I found a combination where all three numbers were
in the array. Alternatively I could have looped through the list of numbers and recycled my program from part 1.
-Jorge Borges 12/21/2020
