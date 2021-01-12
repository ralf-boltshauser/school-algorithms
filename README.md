# Levenshtein Distance

## Project explanation
This is my school project, where I will implement the Levenshtein distance. I will create a search bar and a distance limit. Thus the user can search through my "Products" with a certain tolerance. 

## Algorithm explanation
The levenshtein distance calculates the amount of steps that are needed to convert one string into another. There are three available actions, Replace, Delete, Insert. Based on them the algorithm generates a matrix and calculates the needed steps. It also solves all substring comparisons to find the best possible way.

### Correctness
The algorithm is 100% correct, I found no way to break it. I also run tests before launching the website and there is a notification for the outcome.

### Efficency 
The algorithm is very efficent and I can't think about any other solution. I already optimised two steps by return solutions earlier if one string is empty. 

### Complexity
The algorithm code is complex to understand, but the time and storage complexity isn't high at all because I only check one word at once and so it isn't high. 

### Sources
https://gist.github.com/keesey/e09d0af833476385b9ee13b6d26a2b84
