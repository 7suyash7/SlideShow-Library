# SlideShow Library
# A Javascript Library to add a Slideshow of pictures to any website.
## Add your Images in the HTML inside a Div. You can then pass the Div to the ```start()``` and it should work fine!
## Getting Started
```
npm install slideshow-basic.js
```

## How to use: 
### 1. Setting up the library
```
const slideshow = require('slideshow-basic.js');
OR
import('slideshow-basic.js');
```
### 2. Starting the Library
```
// for class tags 
slideshow.start('.querySelector');
// for id tags
slideshow.start('#querySelector');
```

### 3. Changing the time between each slide
```
// 4 seconds
slideshow.slideTime(4000);
```
### Check if your images have loaded succesfully
```
console.log(slideshow.imageCollection());
```
