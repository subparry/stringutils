# Stringutils

## Description 

This is a **very** small class for string manipulation. I developed it for my own use and DRYness of my projects, so it has very little functionality, however I intend do expand it as needed over time.

## Usage

- CommonJS
```javascript
const Strings = require('stringutils')
```

- ES6 imports
```javascript
import Strings from 'stringutils'
```

- Static methods
```javascript
Strings.randomize() // Returns a random alphanumeric string of length 10
Strings.randomize(100) // Same but of length 100

Strings.capitalize("hello") // returns "Hello"

Strings.capitalize("") // returns ""

Strings.capitalize(10) // Any non string type throws exception
```