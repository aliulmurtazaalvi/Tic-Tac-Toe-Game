let btns = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let btnDisabled = () => {
    for(let btn of btns){
        btn.disabled = true;
    }
}
let btnEnabled = () => {
    for(let btn of btns){
        btn.disabled = false;
        btn.innerText = "";
    }
}
const winPattrens = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let turnO = true;
btns.forEach((btn) => {
    btn.addEventListener("click", () =>{
        if(turnO){
            btn.innerText = "O";
            turnO = false;
        }else{
            btn.innerText = "X";
            turnO = true;
        }
        btn.disabled = true;
        checkWinner();
    })
});

const checkWinner = () =>{
    for(let Pattern of winPattrens){
        let pos0Value = btns[Pattern[0]].innerText;
        let pos1Value = btns[Pattern[1]].innerText;
        let pos2Value = btns[Pattern[2]].innerText;
        if(pos0Value != "" && pos1Value != "" && pos2Value != ""){
            if(pos0Value === pos1Value && pos1Value === pos2Value){
                showWinner(pos0Value);
            }
        }
    }
    
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, The Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    btnDisabled();
}

const newGame = () => {
    turnO = true;
    btnEnabled();
    msgContainer.classList.add("hide");
}

newBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", newGame);