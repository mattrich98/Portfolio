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

//About me shifting section on click circle to change info

// I will try to make a carousel menu with circle buttons you press.

// or maybe two buttons per section and split it down the middle, highlighted in different colours.