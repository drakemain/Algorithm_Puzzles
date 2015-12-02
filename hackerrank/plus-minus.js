input ="43\n55 48 48 45 91 97 45 1 39 54 36 6 19 35 66 36 72 93 38 21 65 70 36 63 39 76 82 26 67 29 24 82 62 53 1 50 47 65 67 19 66 90 77"

function processData(input) {
    var Arr = buildArr(input);
    var posCounter = 0, negCounter = 0, zeroCounter = 0;
    var len = Arr.shift();
    
    for (var i in Arr) {
        if (Arr[i] > 0) {
            posCounter++;
        } else if (Arr[i] < 0) {
            negCounter++;
        } else if (Arr[i] === 0) {
            zeroCounter++;
        }
    }
        
    console.log((posCounter / len).toFixed(4));
    console.log((negCounter / len).toFixed(4));
    console.log((zeroCounter / len).toFixed(4));
} 

function buildArr(input) {
    var buffer = "";
    var Arr = [];
    var index = 0;
    
    for (var i = 0; i < input.length + 1; i++) {
        if (input[i] === " " || i == input.length || input[i] === '\n') {
            Arr[index] = Number(buffer);
            buffer = "";
            index++;
        } else {
            buffer += input[i];
        }
    }
    
    return Arr;
}

processData(input);