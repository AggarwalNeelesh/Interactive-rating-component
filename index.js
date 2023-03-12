let val = 0;
function submit() {
    document.getElementsByClassName("review")[0].innerHTML = "You selected "+val+" out of 5";
    var box1 = document.getElementsByClassName("box")[0];
    var box2 = document.getElementsByClassName("box2")[0];
    box2.style.display = "flex";
    box1.style.display = "none";
}
function markIt(ele){
    let rate = document.getElementsByClassName("rate");
    for(i=0;i<rate.length;i=i+1){
        rate[i].style.backgroundColor = "hsl(213, 19%, 18%)";
        rate[i].style.color = "hsl(217, 12%, 63%)";
    }
    ele.style.backgroundColor = "hsl(25, 97%, 53%)";
    ele.style.color = "white";
    val = ele.innerHTML;
    document.getElementsByTagName("button")[0].removeAttribute("disabled");
}