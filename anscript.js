about = document.getElementById("about");
projects = document.getElementById("projects");
contact = document.getElementById("contact");
pic = document.getElementById("pic");
contents = document.getElementById("contents");
text = document.getElementById("text");
click = 0

function pclicked(){
    click++;
    projects.style.textDecoration = "underline";
    contact.style.textDecoration = "none";
    about.style.textDecoration = "none";
    projects.style.backgroundColor = "#b4b4b4";
    contact.style.backgroundColor = "#f1f1f1";
    about.style.backgroundColor = "#f1f1f1";
    contact.style.fontWeight = "400";
    about.style.fontWeight = "400";
    text.innerHTML = "";
    contents.innerHTML = "<p id = contents><p id = text>namanrush</p></p>";
    projects.removeEventListener("mouseleave",pleave)
    about.addEventListener("mouseleave",ableave)
    contact.addEventListener("mouseleave",cleave)
}
function conclicked(){
    click++
    contact.style.textDecoration = "underline";
    contact.style.backgroundColor = "#b4b4b4"
    projects.style.backgroundColor = "#f1f1f1"
    about.style.backgroundColor = "#f1f1f1"
    projects.style.textDecoration = "none";
    about.style.textDecoration = "none";
    text.innerHTML = ""
    contents.innerHTML="<p id = contents><img src=maily.png><a href = mailto:ananth.naray@gmail.com>ananth.naray@gmail.com</a></p>";
    contact.removeEventListener("mouseleave",cleave)
    projects.addEventListener("mouseleave",pleave)
    about.addEventListener("mouseleave",ableave)
}
function aclicked(){
    click++
    about.style.textDecoration = "underline";
    about.style.backgroundColor = "#b4b4b4";
    contact.style.backgroundColor = "#f1f1f1";
    projects.style.backgroundColor = "#f1f1f1";
    projects.style.textDecoration = "none";
    contact.style.textDecoration = "none";
    text.innerHTML = "";
    contents.innerHTML="<p id = contents><img id = pic src=njimage.jpg><p id = text>Hello my name is <b>Ananth Narayan</b></p></p>";
    about.removeEventListener("mouseleave",ableave)
    contact.addEventListener("mouseleave",cleave)
    projects.addEventListener("mouseleave",pleave)
}
function abhover(){
    about.style.backgroundColor = "#b4b4b4";
}
function chover(){
    contact.style.backgroundColor = "#b4b4b4";
}
function phover(){
    projects.style.backgroundColor = "#b4b4b4";
}
function ableave(){
    about.style.backgroundColor = "#f1f1f1";
}
function pleave(){
    projects.style.backgroundColor = "#f1f1f1";
}
function cleave(){
    contact.style.backgroundColor = "#f1f1f1";
}



projects.addEventListener("click",pclicked);
contact.addEventListener("click",conclicked);
about.addEventListener("click",aclicked)

about.addEventListener("mouseover",abhover)
contact.addEventListener("mouseover",chover)
projects.addEventListener("mouseover",phover)

if(click>0){
    about.addEventListener("mouseleave",ableave)
}
contact.addEventListener("mouseleave",cleave)
projects.addEventListener("mouseleave",pleave)