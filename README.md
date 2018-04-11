# Motivation

Sometimes, strings contain data that's structured in such a way, that the relevant piece of information is
between two - usually symmetrical - delimiters characters (parenthesis, brackets...)

When trying to extract it, you're thinking... **cool, let's use a regex**

After 30 minutes of failed attempts, you decide to look it up on stackoverflow, where someone - several people actually - casually suggest to use something like (?:(?<=\().+?(?=\))|(?<=\[).+?(?=\])), like a random monday morning. *sigh*

Have you ever done this? Well, I have. So I decided to roll up my own non-regexp function to just do that, and never have to think about it again.

## Unbracket

### Default usage
Meet the unbracket package. A simple "unbracketter" without regexp that just works

````javascript
const unbracket = require("unbracket")
const string = "I don't (really) think that you should do this (crazy) thing"
const thoughts = unbracket.withParenthesis(string) // ["really", "crazy"]
````

### API

The API contains all the common delimiters along with custom one

````javascript
unbracket.withBrackets(<String>)
unbracket.withCurlyBraces(<String>)
unbracket.withRafters(<String>)
unbracket.withCustom(<String>, OPENING_DELIMITER, CLOSING_DELIMITER)

````

### Limitations
Unbracket has zero opinion on how to deal with nested delimiters:
````javascript
const unbracket = require("unbracket")
const string = "GroupA(Jean, Jack(Gold, Man)), GroupB(Ben)"
const thoughts = unbracket.withParenthesis(string) // ["Jean, Jack(Gold, Man)", "Ben"]
````

### Installing

Install via npm is straightforward:
```
npm install unbracket
```


## Unit tests

To run the tests in case you wanna contribute
```
cd /path/to/unbracket
npm install
npm run test
```

## Contributing

Pull requests are always welcome ! Please make sure to heavily unit test your feature before.


## Authors

Léo Jacquemin (https://ljaya.me)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

