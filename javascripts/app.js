
const rover = {direction: "N", x: 0, y: 0,travelLog:[]}
const rover2 = {direction: "N", x: 0, y: 0, travelLog:[]}

var board = [] //creación de la array 2d
  for (var i = 0; i < 10; i++){
    board[i] = []
    for (var j = 0; j < 10; j++){
     board[i][j]= 0
  }  
} 

var listComand2 = "llfffffffrrrfffflflflflf"
var listComand = "rffrfflfrffrffrfflfrffrffrfflffrff"
function getRoverPosition() {
  return board[rover.x][rover.y];
}
function getRoverPosition2() {
  return board[rover2.x][rover2.y];
}


function randomNum(){   //número al azar, para poner obstaculos
  return Math.floor(Math.random() * 10);
  }


for(var i = 0; i < 5; i++){ //generación de los 5 obstaculos 
  var row = randomNum();
  var column = randomNum();
  
  board[row][column] = "Obs" 
  
  if (board[row][column]=== "Obs") {
    console.log("obstacle" + " in " + [row] + "," + [column])
  }
}


function turnLeft(rover){
  console.log("turnLeft was called!");
  if(rover.direction === "N"){
    rover.direction="W";
  }
  else if(rover.direction === "E") {
    rover.direction="N";
  }
  else if (rover.direction === "W") {
    rover.direction="S";
  }
  else if (rover.direction === "S") {
    rover.direction="E";
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  if(rover.direction === "N"){
    rover.direction ="E";
  }
  else if(rover.direction === "E") {
    rover.direction="S";
  }
  else if (rover.direction === "W") {
    rover.direction="N";
  }
  else if (rover.direction === "S") {
    rover.direction="W";
  }
}

function moveForward(rover){   
  console.log("moveForward was called") 
  if(rover.direction === "N") {
    if ( (rover.x - 1) < 0) return;
    else if(board[rover.x-1][rover.y] === "Obs") {
      console.log("Obstacle in " + rover.x + "," + rover.y) //si encuentra un obs(obstaculo) no irá hacia el
      turnAround(rover);
    } 
    else if(getRoverPosition() === getRoverPosition2()) { //cuando comienzan a moverse los dos rovers comienzan en la misma posición
      return rover.x -= 1
    }
    else if(board[rover.x-1][rover.y] === board[rover2.x][rover2.y]) { //si el siguiente paso es el rover2, no lo hace
      console.log("Other rover in " + rover2.x + "," + rover2.y)
    }
    else {
     return rover.x -= 1; // se ejecuta el movimiento
    }
  }
  else if(rover.direction === "S") {
    if( (rover.x +1) > 10) return;
    else if(board[rover.x+1][rover.y] === "Obs") {
      console.log("Obstacle in " + rover.x + "," + rover.y)
      turnAround(rover);
    } 
    else if(getRoverPosition() === getRoverPosition2()) {
      return rover.x += 1; 
    }
    else if(board[rover.x+1][rover.y] === board[rover2.x][rover2.y]) {
      console.log("Other rover in " + rover2.x + "," + rover2.y)
    }
     else {
    return rover.x += 1; 
    }
  }
  else if(rover.direction === "E") {
    if( (rover.x +1) > 10) return;
    else if(board[rover.x][rover.y+1] === "Obs") {
      console.log("Obstacle in " + rover.x + "," + rover.y)
      turnAround(rover);
    }
    else if(getRoverPosition() === getRoverPosition2()) { 
      return rover.y += 1;
    }
    else if(board[rover.x][rover.y+1] === board[rover2.x][rover2.y]) { 
      console.log("Other rover in " + rover2.x + "," + rover2.y)
    }
     else {
    return rover.y += 1;
    }
  }
  else if(rover.direction === "W") {
    if ( (rover.y - 1) < 0) return; 
    else if(board[rover.x][rover.y-1] === "Obs") {
      console.log("Obstacle in " + rover.x + "," + rover.y)
      turnAround(rover);
    }
    else if(getRoverPosition() === getRoverPosition2()) { 
      return rover.y -= 1;
    }
    else if(board[rover.x][rover.y-1] === board[rover2.x][rover2.y]) { 
      console.log("Other rover in " + rover2.x + "," + rover2.y)
    }
    else {
    return rover.y -= 1;
    }
  }
}

function moveBackward(rover){
  console.log("moveForward was called") 
  if(rover.direction === "N") {
    if( (rover.x +1) > 10 ) return;
    else if(board[rover.x+1][rover.y] === "Obs") {
      console.log("Obstacle in " + rover.x + "," + rover.y)
      turnAround(rover);
    } 
    else if(getRoverPosition() === getRoverPosition2()) {
      return rover.x +=1
    }
    else if(board[rover.x+1][rover.y] === board[rover2.x][rover2.y]) {
      console.log("Other rover in " + rover2.x + "," + rover2.y)
    }
    else {
      return rover.x += 1;
    }
  }
  else if(rover.direction === "S") {
    if( (rover.x-1 ) < 0) return;
    else if(board[rover.x-1][rover.y] === "Obs") {
      console.log("Obstacle in " + rover.x + "," + rover.y)
      turnAround(rover)
    } 
    else if(getRoverPosition() === getRoverPosition2()) {
      return rover.x -= 1
    }
    else if(board[rover.x-1][rover.y] === board[rover2.x][rover2.y]) {
      console.log("Other rover in " + rover2.x + "," + rover2.y)
    }
     else {
    return rover.x -= 1;
    }
  }
  else if(rover.direction === "E") {
    if( (rover.y -1 ) < 0) return;  
    else if(board[rover.x][rover.y-1] === "Obs") {
      console.log("Obstacle in " + rover.x + "," + rover.y)
      turnAround(rover)
    }
    else if(getRoverPosition() === getRoverPosition2()) {
      return rover.y -= 1
    } 
    else if(board[rover.x][rover.y-1] === board[rover2.x][rover2.y]) {
      console.log("Other rover in " + rover2.x + "," + rover2.y)
    } 
    else {
    return rover.y -= 1;
    }
  } 
  else if(rover.direction === "W") {
    if( (rover.y +1) > 10) return;
    else if(board[rover.x][rover.y+1] === "Obs") {
      console.log("Obstacle in " + rover.x + "," + rover.y)
      turnAround(rover)
    }
    else if(getRoverPosition() === getRoverPosition2()) {
      return  rover.y += 1;
    }
    else if(board[rover.x][rover.y+1] === board[rover2.x][rover2.y]) {
      console.log("Other rover in " + rover2.x + "," + rover2.y)
    }
     else {
    return  rover.y += 1;
    }
  }
}
function turnAround(rover){ //función para que pueda continuar si encuentra un objeto o el rover2
  turnRight(rover);
  turnRight(rover)
  moveForward(rover);
}

function totalMovements(rover) { //log de cuantos movimientos se han realizado 
  rover.travelLog.push(rover.direction + " " + rover.x + " " + rover.y)
}

for (var i = 0; i < listComand.length; i++) { //lista de movimientos rover 
  if (listComand[i] === "r"){  
  turnRight(rover);
    totalMovements(rover);
  }
  else if (listComand[i] === "l"){
    turnLeft(rover);
    totalMovements(rover);
  }
  else if (listComand[i] === "b"){
    moveBackward(rover);
    totalMovements(rover);
  }
  else if (listComand[i] === "f"){
    moveForward(rover);
    totalMovements(rover);
    }
  }

for (var i = 0; i < listComand2.length; i++) { //lista de movimientos rover2
  if (listComand2[i] === "r"){
    turnRight(rover2);
    totalMovements(rover2);
  }
  else if (listComand2[i] === "l"){
    turnLeft(rover2);
    totalMovements(rover2);
   }
  else if (listComand2[i] === "b"){
    moveBackward(rover2);
    totalMovements(rover2);
  }
  else if (listComand2[i] === "f"){
    moveForward(rover2);
    totalMovements(rover2);
     }
  }


console.log(rover.travelLog)
console.log(rover.direction, rover.x, rover.y)
