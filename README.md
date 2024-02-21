# Welcome to Adaptive Color for UI 👋

### Adaptive Color is an library where you can get color automatically from another color. For example: you give a background color and you get color text.

# How Install
```bash
npm i adaptive-color
```

# Functions

### getNameColorARGB
#### getNameColorARGB convert any color on RGB Color for CSS. <br/>Only you need add on the parameter the color to be converted.

#### Example
```js
import { getNameColorARGB } from "adaptive-color";

let myColor = getNameColorARGB("red");
console.log(myColor);

// output: rgb(255,0,0)
```

### getColorRGB
#### getColorRGB get any color and return a constrasted RGB color.

#### Example
```js
import { getColorRGB } from "adaptive-color";

let myFontText = getColorRGB("red");
console.log(myFontText);

// output: RGB generated from Neural Network
```

### getMonoColor
#### getMonoColor get any color and return a constrasted monochromatic color.

#### Example
```js
import { getMonoColor } from "adaptive-color";

let myFontText = getMonoColor("red");
console.log(myFontText);

// output: Color monochromatic generated from Neural Network
```

# Version History

## Version 1.2.1
Improve about select to color when you add this one


### <s>Version 1.1.1</s>
Update README and add reference of code.

### <s> Version 1.0.0</s>
Init the version of adaptive color 
