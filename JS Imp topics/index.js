console.log("JS Dom")

// DOM -> Document Object Modal 

console.log(document)


//Getting the Element in the JS from Page:

let ele = document.getElementsByTagName("h1")
console.log(ele)
// ele[0].innerHTML = "Changed by Js"
ele[0].innerText = "INNer text changed"
console.log(ele[0])
ele[1].innerText = "ok bye i am changing you from js"
/// adding css classes by javascript

// ele[0].classList.add("cls")

ele[0].classList.remove("cls")

// Different Element Selectors:

/**
 * 1 Tag Selector
 * 2 Class Selector
 * 3. Id Selector
 * 4. Query Selector
 * 
 */

let elment = document.getElementsByTagName("h1")
console.log(elment)

elment = document.getElementsByClassName("selected")
console.log(elment[0])

elment = document.getElementById("id")
console.log(elment)



// What we discussed:

/***
 * What is Dom 
 * What is Dom Manipulation
 * What is Document 
 * What is Doucment sleectoin techniqes
 * Element Selection 
 * 4 ways :
 * manipulation of CSs with Js
 */