var elTitle = document.querySelector(".title1")
a = prompt("ismingizni kiriting")
elTitle.textContent = (a)


var elTitle3 = document.querySelector(".title3")
c = prompt("telefon raqamingizni kiriting")
elTitle3.textContent = (c)


var elTitle2 = document.querySelector(".title2")
b = prompt("yoshingizni kiriting")
elTitle2.textContent = (b)
if (b>18){
    elTitle2.textContent = (b)
}else if(b == 18){
    elTitle2.textContent = (b)
}else{
    elTitle.style.display = "none"
    elTitle3.style.display = "none"
    elTitle2.textContent = "sizninig yoshingiz 18da emas"
}








