let burgerMenu = true; // burger menu state closed
let educationMenu = true; // education menu closed
let selfstudiesMenu = true; // self studies menu closed
let workexperienceMenu = true; // work experience menu closed
let contactinfoMenu = true; // contact info menu closed
let recycleButton = true; // recycle menu closed (resets buttons to off)

function burgerMenuOnClickToggle(){ 
burgerMenu = !burgerMenu; //toggles between true and false

if (burgerMenu === false){
    document.getElementById("BurgerIcon").innerHTML = "×";
    document.getElementById("barBox").style.visibility = "visible";

    educationMenu = true;
    selfstudiesMenu = true;
    workexperienceMenu = true;
    contactinfoMenu = true;
    document.getElementById("educationSelect").innerHTML = "○";
    document.getElementById("selfstudiesSelect").innerHTML = "○";
    document.getElementById("workexperienceSelect").innerHTML = "○";
    document.getElementById("contactinfoSelect").innerHTML = "○";
    document.getElementById("infoDiv").style.visibility = "hidden";
    document.getElementById("subTopAbout").innerHTML = "About me"
} 
else if (burgerMenu === true){
    document.getElementById("BurgerIcon").innerHTML = "≡";
    document.getElementById("barBox").style.visibility = "hidden";
}
}

//Plan -> try an make this function work in accordance with having more than 1 button set to false
function recycleToggle(){
recycleButton = !recycleButton

if (recycleButton === false){
    educationMenu = true;
    selfstudiesMenu = true;
    workexperienceMenu = true;
    contactinfoMenu = true;
    document.getElementById("educationSelect").innerHTML = "○";
    document.getElementById("selfstudiesSelect").innerHTML = "○";
    document.getElementById("workexperienceSelect").innerHTML = "○";
    document.getElementById("contactinfoSelect").innerHTML = "○";
    document.getElementById("infoDiv").style.visibility = "hidden";
    document.getElementById("subTopAbout").innerHTML = "About me"
}
else{
    educationMenu = true;
    selfstudiesMenu = true;
    workexperienceMenu = true;
    contactinfoMenu = true;
    document.getElementById("educationSelect").innerHTML = "○";
    document.getElementById("selfstudiesSelect").innerHTML = "○";
    document.getElementById("workexperienceSelect").innerHTML = "○";
    document.getElementById("contactinfoSelect").innerHTML = "○";
    document.getElementById("infoDiv").style.visibility = "hidden";
    document.getElementById("subTopAbout").innerHTML = "About me"
}
}


function educationToggle(){
educationMenu = !educationMenu;

if (educationMenu === false){
    document.getElementById("educationSelect").innerHTML = "●";
    document.getElementById("infoDiv").style.visibility = "visible";
    document.getElementById("subTopAbout").innerHTML = "Education";
    document.getElementById("infoDiv").innerHTML = "University of the Arts London, BA (Hons) Games Design<br>-<br>Sep 2017 - Jan 2018<hr>London Metropolitan University, Games Animation, Modelling and Effects BSc (Hons)<br>-<br>Sep 2018 - Jan 2019<hr>South Thames College, UAL Level 3 BTEC Extended Diploma in Creative Media and Technology, Games design<br>-<br>Sep 2015 - Jul 2017, Grade: Merit (Year 1+2)<hr>Rutlish School<br>-<br>2011 - 2015, GCSE English, Maths, IT (Grade C)";
    document.getElementById("BurgerIcon").innerHTML = "≡";
    document.getElementById("barBox").style.visibility = "hidden";
} 
else if (educationMenu === true){
    document.getElementById("educationSelect").innerHTML = "○";
    document.getElementById("infoDiv").style.visibility = "hidden";
    document.getElementById("subTopAbout").innerHTML = "About me"
}
console.log(educationMenu); //Lately i understand loops and things like this, this console.log is outside the loop so I think of it like a contraption/device you put in a function"
}

function selfstudiesToggle(){
selfstudiesMenu = !selfstudiesMenu;

if (selfstudiesMenu === false){
    document.getElementById("selfstudiesSelect").innerHTML = "●";
    document.getElementById("infoDiv").style.visibility = "visible";
    document.getElementById("subTopAbout").innerHTML = "Self Studies";
    document.getElementById("infoDiv").innerHTML = "- other experience to include -> freecodecamp, mimo app, odin project, books used, coding youtube channels watched, harvard cs50 started, other, coding game with battles on computer";
    document.getElementById("BurgerIcon").innerHTML = "≡";
    document.getElementById("barBox").style.visibility = "hidden";
} 
else if (selfstudiesMenu === true){
    document.getElementById("selfstudiesSelect").innerHTML = "○";
    document.getElementById("infoDiv").style.visibility = "hidden";
    document.getElementById("subTopAbout").innerHTML = "About me"
}
console.log(selfstudiesMenu);
}

function workexperienceToggle(){
workexperienceMenu = !workexperienceMenu;

if (workexperienceMenu === false){
    document.getElementById("workexperienceSelect").innerHTML = "●";
    document.getElementById("infoDiv").style.visibility = "visible";
    document.getElementById("subTopAbout").innerHTML = "Work Experience";
    document.getElementById("infoDiv").innerHTML = "need section for work experience and other experiences.";
    document.getElementById("BurgerIcon").innerHTML = "≡";
    document.getElementById("barBox").style.visibility = "hidden";
} 
else if (workexperienceMenu === true){
    document.getElementById("workexperienceSelect").innerHTML = "○";
    document.getElementById("infoDiv").style.visibility = "hidden";
    document.getElementById("subTopAbout").innerHTML = "About me"
}
}

function contactinfoToggle(){
contactinfoMenu = !contactinfoMenu;

if (contactinfoMenu === false){
    document.getElementById("contactinfoSelect").innerHTML = "●";
    document.getElementById("infoDiv").style.visibility = "visible";
    document.getElementById("subTopAbout").innerHTML = "Contact Info";
    document.getElementById("infoDiv").innerHTML = "need section for safe contact info.";
    document.getElementById("BurgerIcon").innerHTML = "≡";
    document.getElementById("barBox").style.visibility = "hidden";
} 
else if (contactinfoMenu === true){
    document.getElementById("contactinfoSelect").innerHTML = "○";
    document.getElementById("infoDiv").style.visibility = "hidden";
    document.getElementById("subTopAbout").innerHTML = "About me"
}
}