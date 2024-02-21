import { NeuralNetwork } from "./brain";

// get color to rgb

/**
 * @param nameColor string: Any color
 * @return string: Color RGB representation
*/

const getNameColorARGB = (nameColor) => {
    try {
        let temporalDiv = document.createElement("div");
        temporalDiv.style.color = nameColor;
        document.body.appendChild(temporalDiv);
        let colorRGB = window.getComputedStyle(temporalDiv).color;
        document.body.removeChild(temporalDiv);
        return colorRGB;
    } catch (error) {
        // console.log(error);
        return 'rgb(150,20,0)';
    }
}

/**
 * @param myColor string: RGB or RGBA color
 * @return string: Color RGB contrast
*/
// Color Automatically
let netColors = new NeuralNetwork();

netColors.train([
    //black
    { input: { r: 0, g: 0, b: 0, a: 0 }, output: { r: 1, g: 1, b: 1, a: 1 } },
    { input: { r: 0, g: 0, b: 0, a: 1 }, output: { r: 1, g: 1, b: 1, a: 1 } },

    //white
    { input: { r: 1, g: 1, b: 1, a: 0 }, output: { r: 0, g: 0, b: 0, a: 1 } },
    { input: { r: 1, g: 1, b: 1, a: 1 }, output: { r: 0, g: 0, b: 0, a: 1 } },

    //red
    { input: { r: 1, g: 0, b: 0, a: 1 }, output: { r: 0, g: 1, b: 1, a: 1 } },
    { input: { r: 0, g: 1, b: 1, a: 1 }, output: { r: 0, g: 1, b: 1, a: 1 } },
    
    //green
    { input: { r: 0, g: 1, b: 0, a: 1 }, output: { r: 1, g: 0, b: 1, a: 1 } },
    { input: { r: 1, g: 0, b: 1, a: 1 }, output: { r: 1, g: 0, b: 1, a: 1} },
    { input: { r: 0.55, g: 0.5, b: 0, a: 1 }, output: { r: 0, g: 1, b: 0.5, a: 1} },

    //blue
    { input: { r: 0, g: 0, b: 1, a: 1 }, output: { r: 1, g: 1, b: 0, a: 1} },
    { input: { r: 1, g: 1, b: 0, a: 1 }, output: { r: 0, g: 0, b: 0, a: 1} },
    { input: { r: 1, g: 0, b: 0.5, a: 1 }, output: { r: 0.6, g: 0.8, b: 0, a: 1} },

    //mixes
    // { input: { r: 1, g: 1, b: 0, a: 1 }, output: { r: 0.3, g: 0.2, b: 1, a: 0 } },
    // { input: { r: 0.8, g: 0.5, b: 0.2, a: 1 }, output: { r: 1, g: 0.8, b: 0.4, a: 1 } },
    // { input: { r: 0.8, g: 0.9, b: 0.9, a: 1 }, output: { r: 0, g: 0.2, b: 0.67, a: 1 } },
]);

const getColorRGB = (myColor) => {
    let color = ''
    let rgb = myColor
    if (rgb.includes("rgba")) {
        rgb = rgb.replace("rgba(", "").replace(")", "");
    }
    else {
        rgb = rgb.replace("rgb(", "").replace(")", "");
    }
    rgb = rgb.split(",")

    let entrada = {
        r: parseInt(rgb[0]) / 255,
        g: parseInt(rgb[1]) / 255,
        b: parseInt(rgb[2]) / 255,
        a: rgb.includes("rgba") ? parseInt(rgb[3]) : 1
    };

    let resultado = netColors.run(entrada);

    // console.log(resultado)

    color = `rgba(${255 * resultado.r}, ${255 * resultado.g}, ${255 * resultado.b}, ${resultado.a}`;


    return color;
}

//Color Monochromatic

let net = new NeuralNetwork();

// color Monochromatic
net.train([
    //black
    { input: { r: 0, g: 0, b: 0, a: 0 }, output: { color: 0.5 } },
    { input: { r: 0, g: 0, b: 0, a: 1 }, output: { color: 1 } },
    //white
    { input: { r: 1, g: 1, b: 1, a: 0 }, output: { color: 1 } },
    { input: { r: 1, g: 1, b: 1, a: 1 }, output: { color: 0 } },

    //green
    { input: { r: 0, g: 1, b: 0, a: 1 }, output: { color: 0 } },

    //red
    { input: { r: 1, g: 0, b: 0, a: 1 }, output: { color: 1 } },

    //blue
    { input: { r: 0, g: 0, b: 1, a: 1 }, output: { color: 1 } },

    //mixes
    { input: { r: 0.5, g: 0.5, b: 1.0, a: 1 }, output: { color: 0 } },
    { input: { r: 0, g: 0.43, b: 1, a: 1 }, output: { color: 1 } },
]);

// var output = net.run([{ r: 1, g: 0, b: 0 }]);  // [0.987]

/**
 * @param myColor string: RGB or RGBA color
 * @return string: Color monochromatic contrast
*/

const getMonoColor = (myColor) => {
    let color = ''
    let rgb = myColor
    if (rgb.includes("rgba")) {
        rgb = rgb.replace("rgba(", "").replace(")", "");
    }
    else {
        rgb = rgb.replace("rgb(", "").replace(")", "");
    }
    rgb = rgb.split(",")

    let entrada = {
        r: parseInt(rgb[0]) / 255,
        g: parseInt(rgb[1]) / 255,
        b: parseInt(rgb[2]) / 255,
        a: rgb.includes("rgba") ? parseInt(rgb[3]) : 1
    };

    let resultado = net.run(entrada);


    color = `rgb(${255 * resultado.color}, ${255 * resultado.color}, ${255 * resultado.color})`;


    return color;
}

module.exports = {
    getMonoColor,
    getColorRGB,
    getNameColorARGB
}