
const morseCodeOutput = document.getElementById("morse-code").innerHTML ;
  
const getEnglishInput = () => {
    const englishInput = document.getElementById("english-input").value;
    return englishInput;
}




const letterConverter = (letter) => {
    if (letter === "a") {
        return ".-"
    } else if (letter === "b") {
        return "-..."
    }
    else if (letter === "c") {
        return "-.-."
    }
    else if (letter === "d") {
        return "-.."
    }
    else if (letter === "e") {
        return "."
    }
    else if (letter === "f") {
        return "..-."
    }
    else if (letter === "g") {
        return "--."
    }
    else if (letter === "h") {
        return "...."
    }
    else if (letter === "i") {
        return ".."
    }
    else if (letter === "j") {
        return ".---"
    }
    else if (letter === "k") {
        return "-.-"
    }
    else if (letter === "l") {
        return ".-.."
    }
    else if (letter === "m") {
        return "--"
    }
    else if (letter === "n") {
        return "-."
    }
    else if (letter === "o") {
        return "---"
    }
    else if (letter === "p") {
        return ".--."
    }
    else if (letter === "q") {
        return "--.-"
    }
    else if (letter === "r") {
        return ".-."
    }
    else if (letter === "s") {
        return "..."
    }
    else if (letter === "t") {
        return "-"
    }
    else if (letter === "u") {
        return "..-"
    }
    else if (letter === "v") {
        return "...-"
    }
    else if (letter === "w") {
        return ".--"
    }
    else if (letter === "x") {
        return "-..-"
    }
    else if (letter === "y") {
        return "-.--"
    }
    else if (letter === "z") {
        return "--.."
    }
    else if (letter === " ") {
        return "/"
    }
}




// const testString = "iigdhds oisdh"

// const testStringArray = testString.split("");

// const testStringArrayConverted = testStringArray.map((el) => {
//     return letterConverter(el);
// });

// const testStringArrayConvertedString = testStringArrayConverted.join("");

const translator = (string) => {
    const stringArray = string.split("");
    const stringArrayConverted = stringArray.map((el) => {
        return letterConverter(el);
    })
    const stringArrayconvertedString = stringArrayConverted.join("");
    return stringArrayconvertedString;
}






const showMorseCode = (translatedString) => {
    const morseCode = translatedString
    document.getElementById("morse-code").innerHTML = `${morseCode}`
    translatedString = ""
}





// const textInputGlobal = document.getElementById("submit").addEventListener("click", (event) => {
//     event.preventDefault();
//     const textInput = document.getElementById("english-input").value;
//     for (var i = 0; i < textInput.length; i++) {
//         let translatedString = "";
//         const translatedLetter = letterConverter(textInput.charAt(i));
//         translatedString += translatedLetter; 
//         console.log(translatedString) ;
//       }
// });


    





document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();
    const englishInput = getEnglishInput();
    const morseCode = translator(englishInput);
    showMorseCode(morseCode); 
});


