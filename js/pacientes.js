window.addEventListener("load", function (e) {


  var nombre  = document.getElementById("nombre-paciente");
  var apellido = document.getElementById("apellido-paciente");
  var edad     = document.getElementById("edad-paciente");
  var genero   = document.getElementById("genero-paciente");
  var ciudad   = document.getElementById("ciudad-paciente");
  var pais     = document.getElementById("pais-paciente");

  var ObjetoPaciente = JSON.parse(localStorage.getItem("pacientes"));
  console.log(ObjetoPaciente);

  nombre.innerText   = ObjetoPaciente.nombre;
  apellido.innerText = ObjetoPaciente.apellido;
  edad.innerText     = ObjetoPaciente.edad;
  genero.innerText   = ObjetoPaciente.genero;
  ciudad.innerText   = ObjetoPaciente.ciudad;
  pais.innerText     = ObjetoPaciente.pais;
  e.preventDefault();


  var editar = document.getElementById("editar");
  editar.addEventListener("click", function(){
    window.location="editar.html"
  })

});
