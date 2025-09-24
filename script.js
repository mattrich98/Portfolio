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
    document.getElementById("subTopAbout").innerHTML = "test";
} 
else if (educationMenu === true){
    document.getElementById("educationSelect").innerHTML = "○";
    document.getElementById("infoDiv").style.visibility = "hidden";
    document.getElementById("subTopAbout").innerHTML = "About me";
}
}