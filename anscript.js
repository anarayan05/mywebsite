about = document.getElementById("about");
projects = document.getElementById("projects");
contact = document.getElementById("contact");
pic = document.getElementById("pic");
text = document.getElementById("text");
act = document.getElementById("act");
skp = document.getElementById("skp")
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
	act.innerHTML = "";
	skp.innerHTML="";
	text.style.marginLeft = "0";
	pic.removeAttribute('src');
	pic.style.opacity = "0";
    text.innerHTML= "<a href = 'https://anarayan05.github.io/namanrush/'>namanrush</a><br><br>I programmed this game using JavaScript, it is a single player casual game. It consists of a circle that you can move using the arrow keys, and other circles that you must avoid. If your circle gets hit, you lose a life, and you have 3 lives. Your circle is also given 50 bullets. These bullets are released using the WASD controls for each direction. Along with avoiding the circles you must shoot all the circles in the field to advance to the next phase. In one of the phases, the other circles shoot back. Please give it a try, and have fun! "
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
    text.innerHTML = "";
	pic.style.opacity="1";
	pic.src = "maily.png";
	pic.style.border = "none"
	act.innerHTML = "";
	skp.innerHTML="";
	text.innerHTML = "<form action=mailto:ananth.naray@gmail.com method=get enctype=text/plain>Subject:<br><input type=text name=subject><br>Email:<br><input type=email name=email><br>Message:<br><textarea name=body rows=5 cols=30></textarea><br><input type=submit value=Send></form>";
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
	text.style.marginLeft = "30px";
	pic.style.border = "3px solid"
	pic.style.opacity = "1";
	pic.src = "njimage.jpg";
    text.innerHTML="Hello my name is <b>Ananth Narayan</b>. I am a 12th grade highschool student amd have a passion for computer science. In my free time I like to play guitar and basketball. I love to code, whether it be problem solving or creating new projects, I always have something I am working on.";
	act.innerHTML = "<b>Notable Activities and Awards<b>"
	skp.innerHTML= "Proficient in 4 programming languages:<br>Python, Javascript, Java, and HTML"
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