const timer=document.getElementById('timer');
const score=document.getElementById('score');
const grid=document.querySelectorAll('.grid-item');
let toyposition;
let lefttime=10;
let result=0;
let movesquare

function randomnumber(){
    grid.forEach(square =>{
        square.classList.remove('mole');
    })
    let randomindex=Math.floor(Math.random()*9);
    const square=grid[randomindex];
    square.classList.add('mole');
    toyposition=square.id;
}
grid.forEach(square=>{
    square.addEventListener('click',()=>{
        if(square.id==toyposition)
        {
            result++;
            score.textContent=result;
            toyposition=null;
        }
    })
})
function flip()
{
    movesquare=setInterval(randomnumber,700);
}
function overtime()
{
    lefttime--;
    timer.textContent=lefttime;
    if(lefttime==0)
    {
        clearInterval(timerid);
        clearInterval(movesquare);
        alert('Timeup your score is '+result);
        setInterval(score.textContent=0,5000);
        // lefttime=60;
        

    }
    // else 
}
flip();
let timerid=setInterval(overtime,1000);
// overtime();

