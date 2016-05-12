var pageBody = document.getElementsByTagName("body")[0];
var headerDiv = document.getElementsByTagName("div")[2];

window.addEventListener("load", function (){
    if(document.body.clientWidth < 750)
        resize_small();
    else
        resize_large();
});

window.addEventListener("resize", function (){
    if(document.body.clientWidth < 750)
        resize_small();
    else
        resize_large();
});
function resize_small(){
    pageBody.style["font-size"] = document.body.clientWidth*(25/1299)+"px";
    document.getElementById('profile-img').style.display = "none";
    headerDiv.className = "col-75";
    headerDiv.style.textAlign = "center";
}

function resize_large(){
    pageBody.style["font-size"] = "16px";
    document.getElementById('profile-img').style.display = "block";
    headerDiv.className = "col-50";
    headerDiv.style.textAlign = "left";
}