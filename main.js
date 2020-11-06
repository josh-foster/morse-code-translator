const letterConverter = (letter) => {
    if (letter === "a") {
        return ".-"
    } else if (letter === "b") {
        return "-..."
    }
    else if (letter === "c") {
        return "-..."
    }
    else if (letter === "d") {
        return "-..."
    }
    else if (letter === "e") {
        return "-..."
    }
    else if (letter === "f") {
        return "-..."
    }
    else if (letter === "g") {
        return "-..."
    }
    else if (letter === "h") {
        return "jfah"
    }
    else if (letter === "i") {
        return "-..."
    }
    else if (letter === "j") {
        return "-..."
    }
    else if (letter === "k") {
        return "-..."
    }
    else if (letter === "l") {
        return "-..."
    }
    else if (letter === "m") {
        return "-..."
    }
    else if (letter === "n") {
        return "-..."
    }
    else if (letter === "o") {
        return "-..."
    }
    else if (letter === "p") {
        return "-..."
    }
    else if (letter === "q") {
        return "-..."
    }
    else if (letter === "r") {
        return "-..."
    }
    else if (letter === "s") {
        return "-..."
    }
    else if (letter === "t") {
        return "-..."
    }
    else if (letter === "u") {
        return "-..."
    }
    else if (letter === "v") {
        return "-..."
    }
    else if (letter === "w") {
        return "-..."
    }
    else if (letter === "x") {
        return "-..."
    }
    else if (letter === "y") {
        return "-..."
    }
    else if (letter === "z") {
        return "-..."
    }
    else if (letter === " ") {
        return "/"
    }
}

const textInputGlobal = document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();
    const textInput = document.getElementById("english-input").value;
    for (var i = 0; i < textInput.length; i++) {
        string2 = "";
        letterConverter(string.charAt(i));
        string2 += textInput.charAt(i);   
        console.log(string2);
      }
    
});

    

const string = "hellos";

document.getElementById("morse-code").innerHTML = string



