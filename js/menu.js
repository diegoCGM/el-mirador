




let flecha = document.querySelector('.flecha');

let submenu = document.querySelector('.sublinks');



flecha.addEventListener('click',function(){

if(submenu.className=="sublinks oculto"){

    submenu.className = "sublinks vista"

  flecha.className="glyphicon glyphicon-chevron-up flecha "

  submenu.style.display = 'block';
  

}else{

    submenu.className= "sublinks oculto";

    flecha.className="glyphicon glyphicon-chevron-down "
    submenu.style.display = 'none';
}


});

console.log(submenu);