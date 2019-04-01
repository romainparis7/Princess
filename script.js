function cache()
{
    var menu=document.getElementById("burger-ul");
    if(menu.className == "invisible"){
        menu.className="visible";
    }else{
        menu.className="invisible";

    }
    /*2e FACON
    if(menu.style.visibility == "hidden"){
        menu.style.visibility="initial";
    }else{
        menu.style.visibility="hidden";

    3e FACON (une seule ligne):
    menu.style.visibility=(menu.style.visibility=="hidden")
                        ?"initial":"hidden";  ?=vrai :=pas vrai
    }*/
}