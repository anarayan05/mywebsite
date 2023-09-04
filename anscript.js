about = document.getElementById("about");
projects = document.getElementById("projects");
contact = document.getElementById("contact");
pic = document.getElementById("pic");
mailpic = document.getElementById("mailpic")
text = document.getElementById("text");
act = document.getElementById("act");
acdes = document.getElementById("acdes");
course = document.getElementById("course")
cdes = document.getElementById("cdes")
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
	acdes.innerHTML="";
    cdes.innerHTML=""
    course.innerHTML= ""
	text.style.marginLeft = "0";
	pic.removeAttribute('src');
    pic.style.opacity="0"
    mailpic.removeAttribute('src')
    mailpic.style.opacity="0"
    text.innerHTML= "<a href = 'https://anarayan05.github.io/namanrush/'><b>namanrush</b></a><br><br>I programmed this game using JavaScript, it is a single player casual game. It consists of a circle that you can move using the arrow keys, and other circles that you must avoid. If your circle gets hit, you lose a life, and you have 3 lives. Your circle is also given 50 bullets. These bullets are released using the WASD controls for each direction. Along with avoiding the circles you must shoot all the circles in the field to advance to the next phase. In one of the phases, the other circles shoot back. Please give it a try, and have fun!<br><br><a href = 'https://interview-project.streamlit.app/'><b>Story Loom Project</b></a><br><br>This project is about sharing the stories and journeys of Indian American Immigrants. I have recorded interviews of Indian Americans in the Buffalo Area involving their journeys, challenges and succeses coming from India to America. After that , I used artificial intelligence to transcribe the interview and convert it into text, to easily share them."
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
	pic.style.opacity = "0"
    pic.removeAttribute('src')
	mailpic.src="maily.png"
    mailpic.style.opacity="1"
	act.innerHTML = "";
    cdes.innerHTML=""
    course.innerHTML= ""
	acdes.innerHTML="";
	text.innerHTML = "<form action=mailto:ananth.naray@gmail.com method=get enctype=text/plain>Subject:<br><input type=text name=subject><br>Email:<br><input type=email name=email><br>Message:<br><textarea name=body rows=5 cols=30></textarea><br><input type=submit value=Send></form><br>";
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
    mailpic.removeAttribute('src')
    mailpic.style.opacity="0"
	pic.src = "njimage.jpg";
    pic.style.opacity="1"
    act.innerHTML = "<b>Notable Activities</b>"
    course.innerHTML = "<b>Coursework</b>"
    cdes.innerHTML = "<li>Python Data Structures, UMich 2020</li><li>Summer High School Coding Camp (Web Development with Javascript and HTML), UPenn 2021</li>"
    text.innerHTML="Hello my name is <b>Ananth Narayan</b>. I am a 12th grade highschool student and have a passion for computer science. In my free time I like to play guitar and basketball. I love to code, whether it be problem solving or creating new projects, I always have something I am working on. Otherwise, I love to explore other topics, such as data structures and AI. ";
    acdes.innerHTML= "<li>Created projects (games,websites,interactive interfaces) using 4 different languages:<br>Java, Python, Javascript, and HTML. See in projects tab.</li><li>Volunteered at Meals on Wheels</li><li>Worked at Asbury Pointe Retirement Community</li><li>Organized the community based Story Loom Project to share the stories of Indian Americans in the Buffalo-Niagara Area. See in projects tab.</li><li>Placed 2nd in 2023 Lockheed Martin Codequest (Owego, New York) in Team EA<br><a href='https://www.lockheedmartin.com/en-us/who-we-are/communities/codequest/code-quest-past-quests/codequest-2023.html'>See Competition Results</a></li><li>Attended Amherst School of Guitar 2017-2023</li><li>Interned at University at Buffalo, Summer 2023. Worked on project involving developing machine learning algorithm to identify people in historical documents.</li>"
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