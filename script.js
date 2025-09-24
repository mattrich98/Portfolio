let burgerMenu = true; // burger menu state closed
let educationMenu = false; // education menu closed
let selfStudiesMenu = true; // self studies menu closed
let workExperienceMenu = true; // work experience menu closed
let contactInfoMenu = true; // contact info menu closed

function burgerMenuOnClickToggle(){ 
burgerMenu = !burgerMenu; //toggles between true and false

if (burgerMenu === false){
    document.getElementById("BurgerIcon").innerHTML = "×";
    document.getElementById("barBox").style.visibility = "visible";
    educationMenu = true;
    document.getElementById("educationSelect").innerHTML = "○";
    document.getElementById("infoDiv").style.visibility = "hidden";
} 
else if (burgerMenu === true){
    document.getElementById("BurgerIcon").innerHTML = "≡";
    document.getElementById("barBox").style.visibility = "hidden";
}
}

function educationToggle0(){
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
}
console.log(educationMenu);
}

