console.log("Events File")

let ele = document.getElementsByTagName("h1")


let color = true
// Window Event:
function load(){
    alert("window loaded")
}

//Mouse Event
function changeColor(){
    color = !color
    if(color){
        ele[0].classList.remove("cls")
        ele[0].innerHTML = "Color is Changed to default black"
    }
    else{
        ele[0].innerHTML = "Color is Changed to REd"
        ele[0].classList.add("cls")
    }
   

}

//Keyboard Events:
function myFunction() {
console.log('cha')    
} ele[0].innerHTML = "Color is Changed to default black"


//Events in Js

/**
 * 
 * Events in Js:
 * 
 * 1. Mouse Events
 * 2. KeyBoard Events
 * 3. Windows Events
 * 
 * MOuse Events:
 * click , dblclick ,moverover,mouseleft,
 * 
 * KeyBoad Events:
 * onkeydown, onEnter,onkeyUP  , onChange
 * 
 * Windows Events:
 * windowload , windowsize windowcloses
 * 
 * 
 */