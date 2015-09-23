//https://leetcode.com/problems/compare-version-numbers/

var compareVersion = function(version1, version2) {
  v1 = version1.split('.');
  v2 = version2.split('.');

  v1Len = v1.length;
  v2Len = v2.length;

  for (var i = 0; i < v1.length; i++) {
    if (Number(v1[i]) > Number(v2[i])) {return 1;}
    else if (Number(v1[i]) < Number(v2[i])) {return -1;}
  }
  
  if ((v1Len > v2Len) && (v1[v1Len - 1] > 0)) {return 1;} 
  else if ((v1Len < v2Len) && (v2[v2Len - 1] > 0)) {return -1;} 
  else {return 0;}
}
