# Remove Accents and Convert Special Characters
This little module allows the removal of any accent from each character in a string text. It also converts
special UTF-8 characters to the visually closest character.

## Examples
```text
é => e
```
```text
œ => oe
```
```text
ȸ => db
```
```text
ß => ss // in the german language, those are interchangeable
```

## Usage
Script:
```javascript
const removeAccents = require('remove-accents')
const withAccent = 'exposé'
const withoutAccent = removeAccents(withAccent)
console.log(withoutAccent)
```
Output:
```
expose
```
Script:
```javascript
import removeAccents from 'remove-accents'
const withAccent = 'exposé'
const withoutAccent = removeAccents(withAccent)
console.log(withoutAccent)
```
Output:
```
expose
```