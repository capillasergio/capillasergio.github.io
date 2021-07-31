function pruebaemail (valor){
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(valor)){
		alert('email no valido');
	}
	else alert('email valido');
	}



	function soloNumeros(matricula)
  {
  if (/[^0-9 .\s]/gi.test(matricula.value))
  {
   swal({
      type: 'warning',
      title: 'Advertencia',
      text: 'Teléfono sólo admite números',
        })
  matricula.value = "";
  matricula.focus();
  return false;
  }
 }