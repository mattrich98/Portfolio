let burgerMenu = true; // burger menu state closed
let aboutMenu = true; // about menu closed
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

    aboutMenu = true;
    educationMenu = true;
    selfstudiesMenu = true;
    workexperienceMenu = true;
    contactinfoMenu = true;
    document.getElementById("aboutSelect").innerHTML = "●";
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

function recycleToggle(){
recycleButton = !recycleButton

if (recycleButton === false){
    aboutMenu = true;
    educationMenu = true;
    selfstudiesMenu = true;
    workexperienceMenu = true;
    contactinfoMenu = true;
    document.getElementById("aboutSelect").innerHTML = "○";
    document.getElementById("educationSelect").innerHTML = "○";
    document.getElementById("selfstudiesSelect").innerHTML = "○";
    document.getElementById("workexperienceSelect").innerHTML = "○";
    document.getElementById("contactinfoSelect").innerHTML = "○";
    document.getElementById("infoDiv").style.visibility = "hidden";
    document.getElementById("subTopAbout").innerHTML = "About me"
}
else{
    aboutMenu = true;
    educationMenu = true;
    selfstudiesMenu = true;
    workexperienceMenu = true;
    contactinfoMenu = true;
    document.getElementById("aboutSelect").innerHTML = "○";
    document.getElementById("educationSelect").innerHTML = "○";
    document.getElementById("selfstudiesSelect").innerHTML = "○";
    document.getElementById("workexperienceSelect").innerHTML = "○";
    document.getElementById("contactinfoSelect").innerHTML = "○";
    document.getElementById("infoDiv").style.visibility = "hidden";
    document.getElementById("subTopAbout").innerHTML = "About me"
}
}

function aboutToggle(){
aboutMenu = !aboutMenu;

if (aboutMenu === false){
    recycleToggle()
    document.getElementById("aboutSelect").innerHTML = "●";
    document.getElementById("infoDiv").style.visibility = "hidden";
    document.getElementById("subTopAbout").innerHTML = "About me";
    document.getElementById("BurgerIcon").innerHTML = "≡";
    document.getElementById("barBox").style.visibility = "hidden";
} 
else if (aboutMenu === true){
    document.getElementById("aboutSelect").innerHTML = "○";
    document.getElementById("infoDiv").style.visibility = "hidden";
    document.getElementById("subTopAbout").innerHTML = "About me"
}
}

aboutToggle() //activated button by default

function educationToggle(){
educationMenu = !educationMenu;

if (educationMenu === false){
    recycleToggle()
    document.getElementById("educationSelect").innerHTML = "●";
    document.getElementById("infoDiv").style.visibility = "visible";
    document.getElementById("subTopAbout").innerHTML = "Education";
    document.getElementById("infoDiv").innerHTML = "University of the Arts London, BA (Hons) Games Design<br>(Sep 2017 - Jan 2018)<hr>London Metropolitan University, Games Animation, Modelling and Effects BSc (Hons)<br>(Sep 2018 - Jan 2019)<hr>South Thames College, UAL Level 3 BTEC Extended Diploma in Creative Media and Technology, Games design<br>(Sep 2015 - Jul 2017, Grade: Merit (Year 1+2))<hr>Rutlish School<br>(2011 - 2015, GCSE English, Maths, IT (Grade C))";
    document.getElementById("BurgerIcon").innerHTML = "≡";
    document.getElementById("barBox").style.visibility = "hidden";
} 
else if (educationMenu === true){
    document.getElementById("educationSelect").innerHTML = "○";
    document.getElementById("infoDiv").style.visibility = "hidden";
    document.getElementById("subTopAbout").innerHTML = "About me"
}
}

function selfstudiesToggle(){
selfstudiesMenu = !selfstudiesMenu;

if (selfstudiesMenu === false){
    recycleToggle()
    document.getElementById("selfstudiesSelect").innerHTML = "●";
    document.getElementById("infoDiv").style.visibility = "visible";
    document.getElementById("subTopAbout").innerHTML = "Self Studies";
    document.getElementById("infoDiv").innerHTML = "The Skills Network, Contract<br>(June 2024, August 2024)<br>-<br>Learnt various things such as the Software Development Life Cycle, Stake holders, uses of ai prompting, agile methodologies, experience with website builders, some basics of Python and little about SQL.<hr>The Odin Project<br>Solidified most fundamentals of HTML, CSS, JavaScript, Git and other.<hr>Mimo Phone App<br>Spoon feeds information, so I always learnt a lot from it.";
    document.getElementById("BurgerIcon").innerHTML = "≡";
    document.getElementById("barBox").style.visibility = "hidden";
} 
else if (selfstudiesMenu === true){
    document.getElementById("selfstudiesSelect").innerHTML = "○";
    document.getElementById("infoDiv").style.visibility = "hidden";
    document.getElementById("subTopAbout").innerHTML = "About me"
}
}

function workexperienceToggle(){
workexperienceMenu = !workexperienceMenu;

if (workexperienceMenu === false){
    recycleToggle()
    document.getElementById("workexperienceSelect").innerHTML = "●";
    document.getElementById("infoDiv").style.visibility = "visible";
    document.getElementById("subTopAbout").innerHTML = "Work Experience";
    document.getElementById("infoDiv").innerHTML = "Web Designer<br>-<br>TWENTY4SEVENTRENDS, Contract<br>(Mar 2022 - Sep 2022)<br><br><hr><br>Heating Engineer Assistant<br>-<br>School Work Experience<br>(1 Week, 2014)<br><br><hr><br>";
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
    recycleToggle()
    document.getElementById("contactinfoSelect").innerHTML = "●";
    document.getElementById("infoDiv").style.visibility = "visible";
    document.getElementById("subTopAbout").innerHTML = "Contact Info";
    document.getElementById("infoDiv").innerHTML = "Email: matthew_richardson@ymail.com<br><br><hr><br>Location: Epsom and Ewell<br><br><hr><br>Phone number: 07715548877<br><br><hr><br>Additional information on CV.<br><br><hr><br>";
    document.getElementById("BurgerIcon").innerHTML = "≡";
    document.getElementById("barBox").style.visibility = "hidden";
} 
else if (contactinfoMenu === true){
    document.getElementById("contactinfoSelect").innerHTML = "○";
    document.getElementById("infoDiv").style.visibility = "hidden";
    document.getElementById("subTopAbout").innerHTML = "About me"
}
}