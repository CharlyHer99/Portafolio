$("document").ready(inicio)

function inicio(){

  $("#modulos").html(modulos);
  $("#modulosN").html(modulosN);
  $("#modulosC").html(modulosC);
  $("#modulosS").html(modulosS);
  $("#modulosB").html(modulosB);
  $("#school").html(escuela);
}


function modulos(){
  $("#modulos").show();
  $("#tec").hide();
}

function tec(){
  $("#modulos").hide();
  $("#tec").show();
}

function modulosN(){
  $("#modulosN").show();
  $("#tecN").hide();
}

function tecN(){
  $("#modulosN").hide();
  $("#tecN").show();
}

function modulosC(){
  $("#modulosC").show();
  $("#tecC").hide();
}

function tecC(){
  $("#modulosC").hide();
  $("#tecC").show();
}

function modulosS(){
  $("#modulosS").show();
  $("#tecS").hide();
}

function tecS(){
  $("#modulosS").hide();
  $("#tecS").show();
}

function modulosB(){
  $("#modulosB").show();
  $("#tecB").hide();
}

function tecB(){
  $("#modulosB").hide();
  $("#tecB").show();
}

$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});


$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});


//Sobre mi

function escuela(){
  $("#school").show();
  $("#know").hide();
  $("#activ").hide();
  $('#habilidades').hide();
}

function conocimientos(){
  $("#school").hide();
  $("#know").show();
  $("#activ").hide();
  $('#habilidades').hide();
}

function actividad(){
  $("#school").hide();
  $("#know").hide();
  $("#activ").show();
  $('#habilidades').hide();
}

function habilidades(){
  $("#school").hide();
  $("#know").hide();
  $("#activ").hide();
  $('#habilidades').show();
}

//Footer
$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip();
})




//Servicio de correo electronico
