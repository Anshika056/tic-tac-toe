var count=1;
var sp1=0;
var sp2=0;
var current="x";
var start=1;


function fill(control){   //to fill our board
    player();
    if(count<=9){
        if(control.innerHTML == ""){
            control.innerHTML=(current == "x") ? "x" : "o";
            count++;
            changep();
            if(checkWin()){ //Conditions to find our winner
                if(control.innerHTML === "x"){
                  play = "Player 1";
                  document.getElementById("win").innerHTML = play  +  " has won!!";
                    score1();
                    count=10;
                    return control;
                }
                else(control.innerHTML === "o") 
                {
                    play = "Player 2";
                  document.getElementById("win").innerHTML = play  +  " has won!!";
                    score2();
                    count=10;
                    return control;
                }
            }

            if(count==10){   //to show it's a tie
                alert("It's a Tie");
                reset();
                return control;
            }
        
        }

    }

}

    function changep(){    //to change the players
        current = (current == "x") ? "o" : "x";
    }

function player(){ //to manage the turns 
    if(start % 2 !== 0){
         currentPlayer = "Player 1";
        start++;
    } 
    else if( start % 2 == 0){
       currentPlayer = "Player 2";
        start++;
    }
    document.getElementById("t1").innerHTML = currentPlayer + "'s turn!!";
}

function getdata(get)  //to get data
{ 
 return document.getElementById(get).innerHTML;
 }
    
 //checkCondition function will check values that whether they are same or not ,if same then return true.
function checkCondition(cell1,cell2,cell3){
    if(getdata(cell1)!="" && getdata(cell2)!="" && getdata(cell3)!="" && getdata(cell1)==getdata(cell2) && getdata(cell2)==getdata(cell3) && getdata(cell3)==getdata(cell1)) 
    {
        return true;
    }
}

//checkwin function will check all the possibility in the box to get a winner
function checkWin() 
{
    if(checkCondition('cell1','cell2','cell3') || checkCondition('cell4','cell5','cell6') || checkCondition('cell7','cell8','cell9') || checkCondition('cell1','cell4','cell7') || checkCondition('cell2','cell5','cell8') || checkCondition('cell3','cell6','cell9') || checkCondition('cell1','cell5','cell9') || checkCondition('cell3','cell5','cell7')) 
    {
        return true;    
    }
}


function score1(){ //update the scoreboard
    document.getElementById('p1').innerHTML = sp1 + 1;
     sp1++;
}
function score2(){
    document.getElementById('p2').innerHTML = sp2 + 1;
     sp2++;
}


function reset(){ //reset button
    for (let i = 1; i <= 9; i++)
     {
        document.getElementById("cell" + i).innerHTML="";
    } 
    document.getElementById('t1').innerHTML="";
    document.getElementById('win').innerHTML="";
    count=1;
    currentPlayer= "player1"
    current= "x";
}
 
function reset1() //start button
{
    for(let i=1; i<=9; i++){
        document.getElementById('cell' +i ).innerHTML="";
        document.getElementById('p1').innerHTML="0";
        document.getElementById('p2').innerHTML="0";
        document.getElementById('t1').innerHTML="";
    } 
    count = 1 ;
}

function demo(){
   let n1 = document.getElementById("p1").value;
    localStorage.setItem("player1","n2");
   console.log(localStorage.getItem("player1"));

   let n2 = document.getElementById("p2").value ;
    localStorage.setItem("player2","n2");
   console.log(localStorage.getItem("player2"));
   }