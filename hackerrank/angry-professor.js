var raw = "2\n4 3\n-1 -3 4 2\n4 2\n0 -1 2 1\n";

function processData(input) {
  var lines = input.split('\n');
  var cases = Number(lines.shift());
  var line1;

  for (var i = cases; i > 0; i--) {
    line1 = lines.shift();
    line1 = line1.split(" ");

    line2 = lines.shift();
    line2 = line2.split(" ");

    console.log(isAngry(line1, line2));
  }
}

function isAngry(classStats, students) {
  var threshold = Number(classStats[1]);
  var classSize = Number(classStats[0]);
  var lates = 0;

  for (var i in students) {
    if (Number(students[i]) > 0) {
      lates++;
    }
  }

  console.log("T:" + threshold + " S:" + classSize + " L:" + lates);

  if ((classSize - lates) >= threshold) {
    return "NO";
  } else {
    return "YES";
  }
}

processData(raw);