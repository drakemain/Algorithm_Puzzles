var input = "2\n10 10\n7283455864\n6731158619\n8988242643\n3830589324\n2229505813\n5633845374\n6473530293\n7053106601\n0834282956\n4607924137\n3\t4\n9505\n3845\n3530\n15 15\n400453592126560\n114213133098692\n474386082879648\n522356951189169\n887109450487496\n252802633388782\n502771484966748\n075975207693780\n511799789562806\n404007454272504\n549043809916080\n962410809534811\n445893523733475\n768705303214174\n650629270887160\n2\t2\n99\n99"

function processData(input) {
  var lines = input.split('\n');
  var cases = Number(lines[0]);

  for (var i = cases; i > 0; i--) {
    setCase(1, lines);
  }

}

function setCase(startIndex, data) {
  var dimensions = data[startIndex];
  console.log(data);
  dimensions = dimensions.split(' ');
  var patternStart = startIndex + Number(dimensions[0] + 1);
  var patternDimensions = data[patternStart].split('\t');
  var counter = 0;
  var matrix = [];
  var pattern = [];
  
  console.log(dimensions);
  console.log(patternDimensions);

  for (var i = startIndex; i < Number(dimensions[0] + startIndex); i++) {
    matrix[counter] = data[i].split(' ');
    counter++;
  }

  counter = 0;

  for (var i = patternStart + 1; i < Number(patternDimensions[0]); i++) {
    pattern[counter] = data[i].split(' ');
    counter++;
  }

  console.log(matrix);
  console.log('\n' + pattern);
}

processData(input);