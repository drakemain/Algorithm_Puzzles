var input = "2\n4 3\n-1 -3 4 2\n4 2\n0 -1 2 1\n"

function processData(input) {
    var cases = getCases(input);
    var inputIndexStart = cases.length + 1;
    var builtCase;
    cases = Number(cases);
    
    console.log("Solving " + cases + " cases.");
    
    while (cases > 0) {
        builtCase = buildCase(input, inputIndexStart);
        inputIndexStart = builtCase.lastIndex;
        console.log(builtCase.early + " " + builtCase.late);
        cases--;
    }
    
} 

function buildCase(input, startPoint) {
    var lineCounter = 0;
    var buffer = "";
    var index = startPoint;
    var lateCounter = 0;
    var earlyCounter = 0;
    
    while (lineCounter < 2) {
      if (input[index] === " " || input[index] === '\n') {
          if (isLate(Number(buffer))) {
              lateCounter++;
          } else {
              earlyCounter++;
          }
           
          if (input[index] === '\n') {
              lineCounter++;
          }
          
          buffer = "";
      } else {
          buffer += input[index];
      }
  
      index++;
    }
    
    return {"late": lateCounter, "early": earlyCounter, "lastIndex": index}
}

function isLate(val) {
    if (val > 0) {
        console.log(val + " is true");
        return true;
    } else {
        console.log(val + " is false");
        return false;
    }
}

function getCases(input) {
    var i = 0;
    var buffer = "";
    
    while (input) {
        if (input[i] === "" || input[i] === '\n') {
            return buffer;
        } else {
            buffer += input[i];
            i++;
        }
    }
}

processData(input);