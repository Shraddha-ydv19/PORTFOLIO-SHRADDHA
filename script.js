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
emailjs.init("YOUR_PUBLIC_KEY")
})()

document.getElementById("contact-form").addEventListener("submit", function(e){

e.preventDefault()

emailjs.sendForm(
"SERVICE_ID",
"TEMPLATE_ID",
this
).then(function(){

alert("Message Sent Successfully 🚀")

}, function(error){

alert("Failed to send message")

})

})