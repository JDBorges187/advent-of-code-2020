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

Day 2:
For 2nd day of Advent of Code 2020 the Ta off an shop employees have outdated passwords and our jobs was to
Parse a list of 1000 passwords and verify whether or not they met corporates requirements at the time. Every
Line had a particular letter of the alphabet that the password was required to appear between x and y times.
X and y being a different number given on each line. On this challenge I completed entirely on my iPhone using
ISH shell, vim text editor, and node to test. The first time I completed it I got the answer wrong because I copied
And pasted the input data and once I realized the answer wasn't matching I noticed the input data was 1000 lines,
But my file only had 200 lines. So I used print to pdf to save the data and popper-utils to convert the pdf into a
Text file. Used Regular expression and match to count the number of times letter appears in string and compare to 
min/max provided. For part two the min and max were locations in the string the letter had to appear ignoring zero.
Jorge Borges 12/24/2020 Merry X-Más!!
