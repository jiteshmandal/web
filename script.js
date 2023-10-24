let sideToggle = document.getElementById("side_toggle");
let sideBar = document.getElementById("side_bar");

function toggle_side(){
    if (sideBar.classList.contains("active")){
        sideBar.style.marginLeft = "calc(100%)";
        sideToggle.style.marginLeft = "calc(100% - 30px)";
        sideBar.classList.remove("active");
        // sideBar.style.marginLeft = "-380px";
    }
    else{
        // sideBar.style.marginRight = "380px";
        sideBar.style.marginLeft = "calc(100% - 380px)";
        sideToggle.style.marginLeft = "calc(100% - 410px)";
        sideBar.classList.add("active");
        // sideBar.style.display = "flex";
        // alert()
    }
}