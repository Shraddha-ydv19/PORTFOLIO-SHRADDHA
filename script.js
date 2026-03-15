/* Typing Animation */

const words = ["Developer","Coder","Programmer","Cybersecurity Learner"]

let i = 0
let j = 0
let currentWord = ""
let isDeleting = false

function type(){

currentWord = words[i]

if(isDeleting){
j--
}else{
j++
}

document.getElementById("typing").innerHTML =
currentWord.substring(0,j)

if(!isDeleting && j === currentWord.length){

isDeleting = true
setTimeout(type,1000)
return

}

if(isDeleting && j === 0){

isDeleting = false
i++

if(i === words.length){
i = 0
}

}

setTimeout(type,120)

}

type()



/* EmailJS Contact Form */

(function(){
emailjs.init("sZilpVQEd08RCz-qC")
})()

document.getElementById("contact-form").addEventListener("submit", function(e){

e.preventDefault()

emailjs.sendForm(
"service_mfb83mh",
"template_a755dyi",
this
).then(function(){

alert("Message Sent Successfully 🚀")

}, function(error){

alert("Failed to send message")

})

})