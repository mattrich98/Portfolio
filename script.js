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


/*NEW TODOS REMINDER:

About me shifting section on click circle to change info

 I will try to make a carousel menu with circle buttons you press.

 or maybe two buttons per section and split it down the middle, highlighted in different colours.

 What I may do is this: Add arrow button to side of about me blue part.
  it scrolls past exp -> job exp - > contact and recycle button to return to start.

It may need a click next label, or next section -> so its recognisable easily.

the way this will work is -> for each section, the about me card will change to match other things.

Maybe i'll add a label on the left to symbolise what section like my CV


then I have projects on the bottom. That overtime will have a carousel.

to write more information on the card, I may make it so the profile photo dissapears, then the about me
card extends upwards, so I can write more information about specific sections


NEW PLANS:

Decided for the projects section, the <BK> and FWD>  button will just switch between sections,
ill make images for the arrows saying next page and back somehow

Similar to Roblox, my plan may be this:

-> I make a div (For the background), nest a div inside (the information), then use hidden/visibility css.
-> Make different designs for each section, like a power point slide show.


NEW TODOS END REMINDER*/
















//OTHER TODO PROBABLY FINAL:

/*
For the project section, I plan to make a 9x9 square for each project, like viewing images on X/Twitter.


*/
//OTHER TODO PROBABLY END

/*EXTRA TODO:

Optimize at least security game website for mobile too.




EXTRA TODO END*/