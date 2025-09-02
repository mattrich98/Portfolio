let burgerMenu = true; // burger menu state closed

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