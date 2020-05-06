---

title:  "5 Python tricks you can use right away"
date: 2020-04-21
insta_publish: true
tags: [ python,tips,tricks ]
cover_image : ./images/5 Python tricks you can use right away.png
description: "5 Python tricks you can use right away"
instagram_link: ""
---

#### #1 Measure time elapsed to execute your python code

There are times where we want to know the time of our code, it's also a best practice when you are working with dynamic programming and Big-OH is something of your dinner
```python
import time

startTime = time.time()

#Your code or functions calls

endTime = time.time()
totalTime = endTime - startTime

print("Time taken by your code to execute ", totalTime)
```
#### #2 Find the difference between two list

Lets say we have 2 below list

```python
list1 = ['Harry', 'Hermione', 'Ron', 'Voldemort', 'Bellatrix']
list2 = ['Voldemort', 'Bellatrix'] #bad guys
#Let's say you want to remove those bad guys from Harry's and his friend life and shift harry's and his friends to new list
set1 = set(list1)
set2 = set(list2)
list3 = list(set1.symmetric_difference(set2))
print(list3)
##Output->['Hermione', 'Ron', 'Harry']
```
#### #3 Calculate memory is being used by an object in Python
Sometimes its actually a good practice to check how much memory is being utilized specially when you are working with space complexity <br>
Lets say we have 2 below list

```python
import sys

list1 = ['Harry', 'Hermione', 'Ron', 'Voldemort', 'Bellatrix']
print("size of list = ",sys.getsizeof(list1)) #output:112

name = 'hogwarts'
print("size of name = ",sys.getsizeof(name)) #output:45

```

#### #4 Remove duplicate items from a list
```python
listNumbers = [22,21,22,1,2,3,45,54,67,45,22,21]
print("Original= ", listNumbers)

listNumbers = list(set(listNumbers))
print("After removing duplicate= ", listNumbers) 
#output [1, 2, 3, 54, 45, 67, 21, 22]

```
#### #5 Compare two unordered lists in more neat and pythonic way
Suppose we have 2 list having same items but are not in order

We can use  collections.Counter method if our object is hashable.
```python
from collections import Counter
list_one=[1,3,5,7,9]
list_two=[9,7,5,3,1]
#in the above example two list are identical but are not in order
print("is list one equal to list two", Counter(list_one) == Counter(list_two))
```