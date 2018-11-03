var distanceMatrix=new Array(9)

for (i=0; i <9; i++)
    distanceMatrix[i]=new Array(9)


// 0 = Webex
distanceMatrix[0][0]="0";
distanceMatrix[0][1]="0";
distanceMatrix[0][2]="0";
distanceMatrix[0][3]="0";
distanceMatrix[0][4]="0";
distanceMatrix[0][5]="0";
distanceMatrix[0][6]="0";
distanceMatrix[0][7]="0";
distanceMatrix[0][8]="0";

// 1 = Leingarten
distanceMatrix[1][0]="0";
distanceMatrix[1][1]="0";
distanceMatrix[1][2]="12";
distanceMatrix[1][3]="14";
distanceMatrix[1][4]="10";
distanceMatrix[1][5]="12";
distanceMatrix[1][6]="16";
distanceMatrix[1][7]="160";
distanceMatrix[1][8]="2000";

// 2 = Rötelstrasse
distanceMatrix[2][0]="0";
distanceMatrix[2][1]="12";
distanceMatrix[2][2]="0";
distanceMatrix[2][3]="2";
distanceMatrix[2][4]="8";
distanceMatrix[2][5]="12";
distanceMatrix[2][6]="18";
distanceMatrix[2][7]="160";
distanceMatrix[2][8]="2000";

// 3 = Stiftsberg
distanceMatrix[3][0]="0";
distanceMatrix[3][1]="14";
distanceMatrix[3][2]="2";
distanceMatrix[3][3]="0";
distanceMatrix[3][4]="10";
distanceMatrix[3][5]="13";
distanceMatrix[3][6]="6";
distanceMatrix[3][7]="160";
distanceMatrix[3][8]="2000";

// 4 = Schwabenhof
distanceMatrix[4][0]="0";
distanceMatrix[4][1]="10";
distanceMatrix[4][2]="8";
distanceMatrix[4][3]="10";
distanceMatrix[4][4]="0";
distanceMatrix[4][5]="3";
distanceMatrix[4][6]="8";
distanceMatrix[4][7]="2000";
distanceMatrix[4][8]="2000";

// 5 = Flein
distanceMatrix[5][0]="0";
distanceMatrix[5][1]="13";
distanceMatrix[5][2]="12";
distanceMatrix[5][3]="14";
distanceMatrix[5][4]="3";
distanceMatrix[5][5]="0";
distanceMatrix[5][6]="11";
distanceMatrix[5][7]="160";
distanceMatrix[5][8]="2000";

// 6 = Weinsberg
distanceMatrix[6][0]="0";
distanceMatrix[6][1]="16";
distanceMatrix[6][2]="8";
distanceMatrix[6][3]="6";
distanceMatrix[6][4]="9";
distanceMatrix[6][5]="16";
distanceMatrix[6][6]="0";
distanceMatrix[6][7]="160";
distanceMatrix[6][8]="2000";

// 7 = Strasbourg
distanceMatrix[7][0]="0";
distanceMatrix[7][1]="160";
distanceMatrix[7][2]="160";
distanceMatrix[7][3]="160";
distanceMatrix[7][4]="160";
distanceMatrix[7][5]="160";
distanceMatrix[7][6]="160";
distanceMatrix[7][7]="0";
distanceMatrix[7][8]="2000";

// 8 = Thessaloniki
distanceMatrix[8][0]="0";
distanceMatrix[8][1]="2000";
distanceMatrix[8][2]="2000";
distanceMatrix[8][3]="2000";
distanceMatrix[8][4]="2000";
distanceMatrix[8][5]="2000";
distanceMatrix[8][6]="2000";
distanceMatrix[8][7]="2000";
distanceMatrix[8][8]="0";
module.exports = distanceMatrix;