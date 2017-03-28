

window.addEventListener('load',function() {

    function datos(nombre,apellido,edad,genero,ciudad,pais){
      this.nombre   = nombre;
      this.apellido = apellido;
      this.edad     = edad;
      this.genero   = genero;
      this.ciudad   = ciudad;
      this.pais     = pais;
      this.saludo = function(){
        return ("Nombre: " + this.nombre + "<br>" + "Apellido: "+this.apellido + "<br>" + "Edad: " + this.edad + "<br>" + "Género: " + this.genero + "<br>" +"País: " + this.pais + "," + this.ciudad  + "<br>");
      }
    }

    //var arrpacientes=[];

    var enviar = document.getElementById("enviar");

    enviar.addEventListener('click',function(e) {
      e.preventDefault();

    var nombre   = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var edad     = document.getElementById("edad");
    var genero   = document.getElementById("genero");
    var ciudad   = document.getElementById("ciudad");
    var pais     = document.getElementById("pais");

    if(nombre.value.length!=0 && apellido.value.length!=0 && edad.value.length!=0 && ciudad.value.length!=0 && pais.value.length!=0){

      var nuevoPaciente = new datos(nombre.value,apellido.value,edad.value,genero.value,ciudad.value,pais.value);
      //pacientes.push(nuevoPaciente);
      //console.log(new datos(nombre.value,apellido.value,edad.value,genero.value,ciudad.value,pais.value));
      localStorage.setItem("pacientes",JSON.stringify(nuevoPaciente));
      window.location="pacientes.html"

      // var contenedor = document.getElementById("contenedor");
      // var nuevoContenedor = document.createElement("div");
      // nuevoContenedor.classList.add("nuevo-paciente");
      // nuevoContenedor.innerHTML = nuevoPaciente.saludo();
      // contenedor.appendChild(nuevoContenedor);
    }
    else {
      var indicacion = document.getElementById("indicacion");
      indicacion.innerText="Todos los campos son obligatorios";
    }

    document.getElementById("reset").reset();
  });
});

nombre   = document.getElementById("nombre");
apellido = document.getElementById("apellido");
ciudad   = document.getElementById("ciudad");
pais     = document.getElementById("pais");
edad     = document.getElementById("edad");

var soloLetras = function(e){
  var codigoTecla = e.keyCode;
  console.log(codigoTecla);
  if((codigoTecla>=97 && codigoTecla <=122)||(codigoTecla>=65 && codigoTecla<=90)|| codigoTecla==32){
    return true;
  }
  else {
    return false;
  }
}

nombre.onkeypress   = soloLetras;
apellido.onkeypress = soloLetras;
ciudad.onkeypress   = soloLetras;
pais.onkeypress     = soloLetras;

var soloNumeros = function(e){
  var codigoTecla = e.keyCode;
  if( (codigoTecla>=48 && codigoTecla<=57) && (this.value.length<2)){
    return true;
  }else {
    return false;
  }
}
edad.onkeypress = soloNumeros;

var inputs = document.getElementsByClassName("input-registro");
var validacionInputs = function (e) {
  if(this.value.trim().length==0){
    this.value="";
    this.nextElementSibling.nextElementSibling.nextElementSibling.innerText="Este campo es obligatorio";
  }
  else {
    this.nextElementSibling.nextElementSibling.nextElementSibling.innerText="";
  }

  var arrDato=this.value.split(" ");
  var datoConMayuscula = "";
  for(var i=0; i<arrDato.length; i++){
    datoConMayuscula += arrDato[i].charAt(0).toUpperCase()+arrDato[i].substring(1).toLowerCase() + " ";
  }
  this.value=datoConMayuscula;
  }

for(var i=0; i<inputs.length; i++){
  inputs[i].onblur=validacionInputs;
}
