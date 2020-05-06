---

title:  "5 ways of fibonacci in python"
date: 2020-01-07
insta_publish: true
tags: [ python,fibonacci ]
cover_image : ./images/5 ways of fibonacci in python.png
description: "5 Different ways of implementing fibnocii in python"
instagram_link: ""
---

##### Using Loop
```python
def fib(n):
    a,b = 1,1
    for i in range(n-1):
        a,b = b,a+b
    return a

print fib(5)
```

##### Using Recursion
```python
def fibR(n):
    if n==1 or n==2:
        return 1
    return fibR(n-1)+fibR(n-2)
print fibR(5)
```
##### Using Generator
```python
a,b = 0,1
def fibI():
    global a,b
    while True:
        a,b = b, a+b
        yield a
f=fibI()
f.next()
f.next()
f.next()
f.next()
print f.next()
```

##### Using Memoization
```python
def memoize(fn, arg):
    memo = {}
    if arg not in memo:
        memo[arg] = fn(arg)
    return memo[arg]

## fib() as written in example 1.
fibm = memoize(fib,5)
print fibm
```

> In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the
>  results of expensive function calls and returning the cached result when the same inputs occur again. 
> Memoization has also been used in other 
> contexts (and for purposes other than speed gains), such as in simple mutually recursive descent parsing.
> Although related to caching, memoization refers to a specific case of this optimization, distinguishing it
> from forms of caching such as buffering or page replacement. In the context of some logic programming languages,
> memoization is also >known as tabling
> <a href="https://en.wikipedia.org/wiki/Memoization">Source Wikipedia</a>


##### Using Memoization and Decorator
```python
class Memoize:
    def __init__(self, fn):
        self.fn = fn
        self.memo = {}
    def __call__(self, arg):
        if arg not in self.memo:
            self.memo[arg] = self.fn(arg)
        return self.memo[arg]

@Memoize
def fib(n):
    a,b = 1,1
    for i in range(n-1):
        a,b = b,a+b
    return a
print fib(5)
```

