let burgerMenu = true; // burger menu state closed

function burgerMenuOnClickToggle(){ 
burgerMenu = !burgerMenu; //toggles between true and false

if (burgerMenu === false){
    document.getElementById("BurgerIcon").innerHTML = "!";
    document.getElementById("barBox").style.opacity = 100; //dont need to add + "%" if it's added in CSS already
} 
else if (burgerMenu === true){
    document.getElementById("BurgerIcon").innerHTML = "≡";
    document.getElementById("barBox").style.opacity = 0 + "%";
}
}