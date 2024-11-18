function color(){
    var randomColor = Math.random()
    if (randomColor < 0.2){
        return "purple" 
    } else if (randomColor >= 0.2 & randomColor < 0.4){
        return "green"
    } else if (randomColor >= 0.4 & randomColor < 0.6){
        return "yellow"
    } else if (randomColor >= 0.6 & randomColor < 0.8){
        return "blue"
    } else {
        return 'red'
    }    
}
function bg(){
    var randomBg = Math.random()
    if (randomBg < 0.2){
        return "orange" 
    } else if (randomBg >= 0.2 & randomBg < 0.4){
        return "lightblue"
    } else if (randomBg >= 0.4 & randomBg < 0.6){
        return "darkblue"
    } else if (randomBg >= 0.6 & randomBg < 0.8){
        return "brown"
    } else {
        return 'white'
    }
}

var color1 = color()
var bg1 = bg()
document.getElementById("box1").style.cssText = `
    color: ${color1};
    background-color: ${bg1};
`

var color2 = color()
var bg2 = bg()
document.getElementById("box2").style.cssText = `
    color: ${color2};
    background-color: ${bg2};
`

var color3 = color()
var bg3 = bg()
document.getElementById("box2").style.cssText = `
    color: ${color3};
    background-color: ${bg3};
`

var color3 = color()
var bg3 = bg()
document.getElementById("box3").style.cssText = `
    color: ${color3};
    background-color: ${bg3};
`

var color4 = color()
var bg4 = bg()
document.getElementById("box4").style.cssText = `
    color: ${color4};
    background-color: ${bg4};
`

var color5 = color()
var bg5 = bg()
document.getElementById("box5").style.cssText = `
    color: ${color5};
    background-color: ${bg5};
`

// Better solution - Code with Harry
let boxes = document.querySelector("#cont").children

function getRandomColor(){
    val1 = Math.ceil(0 + Math.random()*255)
    val2 = Math.ceil(0 + Math.random()*255)
    val3 = Math.ceil(0 + Math.random()*255)
    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach(e =>{
    e.style.color = getRandomColor()
    e.style.backgroundColor = getRandomColor()
})