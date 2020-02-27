

//<-----------------------------------------BOTTLE SONG------------------------------>

// var b = 1
// var c = 2
// var bottles = ' ' + 'Green bottles sitting on the wall,\n'
// var number = { 1:'One', 2:'Two', 3:'Three', 4:'Four', 5:'Five', 6:'Six', 7:'Seven', 8:'Eight', 9:'Nine', 10:'Ten' }
//     for (var i = 10; i > 2; i--) {
//         console.log(number[i] + bottles + number[i] + bottles + 'And if one green bottle should accidentally fall,\n' + 'There’ll be ' + number[i-1] +' green bottles sitting on the wall.' )}
//      console.log(number[c] + ' Green bottles sitting on the wall,\n' + number[c] + ' Green bottles sitting on the wall,\n' + 'And if one green bottle should accidentrandom ally fall,\n' + 'There’ll be One green bottle sitting on the wall.')
//      console.log(number[b] + ' Green bottle sitting on the wall,\n' + number[b] + ' Green bottle sitting on the wall,\n' + 'And if one green bottle should accidentally fall,\n' + 'There’ll be Zero green bottles sitting on the wall.')


//<-----------------------------------------DICE------------------------------------->
// function rollingDice(rolled){
// var map = {}
// for (var i = 0; i < 1; i++){
//   var roll = Math.floor(Math.random()*rolled )+1
//   if(map [roll]===undefined){
//     map [roll]=0
//   }
//   map [roll] ++ 
//   console.log("roll = " + roll )
//   if(roll == rolled) {
//     console.log("WINNER!!! you rolled a " + rolled + " !!!")
//   }
//   if(roll != rolled){
//     console.log("Better luck next time")
//   }

// }
//  console.log(map)
// }


// rollingDice(6)

//<-------------------------------------------SWITCH---------------------------------------->


//  var animal = "dog"

//  switch(animal) {
//    case "dog":
//      text = "bark"
//      break 
//    case "cat":
//      text = "meow"
//      break
//    default:1
//      text = "moo"  
//  }

//  console.log(text)

//<-------------------------------------------TIC-TAC-TOE------------------------------------------------------->
  

var player = 0
playerMap = ["x", "o"]
var board = [".", ".", ".", ".", ".", ".", ".", ".", "."]

var standard_input = process.stdin;

standard_input.setEncoding('utf-8');

console.log(board[0], board[1], board[2])
console.log(board[3], board[4], board[5])
console.log(board[6], board[7], board[8])
console.log("Player " + (player + 1) + " :")


standard_input.on('data', function (data) {
  data = data - 1


  
  var lines = process.stdout.getWindowSize()[1];
  for (var i = 0; i < lines; i++) {
    console.log('\r\n');
  }

  if (board[data] === "."){

  board[parseInt(data)] = playerMap[player]

  


  if (board[0] != "." && board[0] == board[1] && board[1] == board[2]) {
    console.log("WINNER IS PLAYER " + (player+1) + " !!" )
    
  } else if (board[0] != "." && board[0] == board[4] && board[4] == board[8]) {
    console.log("WINNER IS PLAYER " + (player+1) + " !!")
  } else if (board[2] != "." && board[2] == board[5] && board[5] == board[8]) {
    console.log("WINNER IS PLAYER " + (player+1) + " !!")
  } else if (board[3] != "." && board[3] == board[4] && board[4] == board[5]) {
    console.log("WINNER IS PLAYER " + (player+1) + " !!")
  } else if (board[6] != "." && board[6] == board[7] && board[7] == board[8]) {
    console.log("WINNER IS PLAYER " + (player+1) + " !!")
  } else if (board[0] != "." && board[0] == board[3] && board[3] == board[6]) {
    console.log("WINNER IS PLAYER " + (player+1) + " !!")
  } else if (board[1] != "." && board[1] == board[4] && board[4] == board[7]) {
    console.log("WINNER IS PLAYER " + (player+1) + " !!")
  } else if (board[2] != "." && board[2] == board[4] && board[4] == board[6]) {
    console.log("WINNER IS PLAYER " + (player+1) + " !!")
  }

  if (board[data] === "."){
  }

  if (player == 0) {
    player = 1
  } else {
    player = 0
  }

ff
}
console.log(board[0], board[1], board[2])
console.log(board[3], board[4], board[5])
console.log(board[6], board[7], board[8])

  console.log("Player " + (player + 1) + " :")

})


