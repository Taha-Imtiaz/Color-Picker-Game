var rgb=document.querySelector('.rgb');
var rgbHeading=document.querySelector('.rgbHeading');
var correctAnswer=null;

var html=document.querySelector('html')
var resetBtn=document.querySelector('.resetButton')
//  console.log(circleArr);

//function to generate random numbers in a given range

var getRandomNumber=(min,max)=>{
return  Math.floor(Math.random() * (max - min)) + min
}

//function to generate random colors of array size

var randomColorGenerator=circleArr=>{
circleArr.forEach(circle => {
    circle.style.background=`rgb(${getRandomNumber(0,255)},${getRandomNumber(0,255)},${getRandomNumber(0,255)})`;
    
});
};

//function to pick 1 random color from circles array

var colorPicked=circleArr=>{
    var randomAnswer=getRandomNumber(0,circleArr.length)
    correctAnswer=circleArr[randomAnswer].style.background
    rgbHeading.textContent=correctAnswer
   // console.log(correctAnswer);
}
//result generator function

var resultGenerator=(circleArr,e)=>{
    var ansPicked=e.target.style.background;
    if(ansPicked===correctAnswer)
    {
        html.style.background=correctAnswer
        rgb.style.background=correctAnswer
          
            circleArr.forEach(circle=>{
          if(circle.style.background!==correctAnswer)
             {
            circle.style.background=correctAnswer
            circle.style.opacity="1"
             }
            })
    
}
    else
    {
        e.target.style.opacity="0";
    }
}

//attach EventListeners

var attachListeners=circleArr=>{
    circleArr.forEach(circle=>{
        circle.addEventListener("click", (e)=>resultGenerator(circleArr,e))
    });
};

//function to reset a Game

var resetGame=circleArr=>{
    html.style.background='white'
    rgb.style.background='orangered'
    circleArr.forEach(circle=>{
        circle.style.opacity='1'
    })
    init()
}

//function to initialize a game

var init=()=>{

var circleArr=document.querySelectorAll('.circle');
randomColorGenerator(circleArr);
colorPicked(circleArr)
attachListeners(circleArr)
resetBtn.addEventListener("click",()=>resetGame(circleArr))
}
init()