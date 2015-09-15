<?php
	//Variables 
	$nombre   = $_POST['name'];
	$email 	  = $_POST['email'];
	$telefono = $_POST['phone'];
    $mensaje_cliente = $_POST['message'];
    $idFormulario = $_POST['idFormulario'];
	$mensaje  =	
	"
	<div style='background-color: #585756; border-radius: 5px 5px 0 0; max-width:1200px;margin: 0 auto; padding: 20px 0;'>
	    <div style='max-width:200px; margin:0 auto;'>
			<img src='logoDevPro.png' alt='logo devpro' width='100%'>
		</div>
	</div>
	<div style='background-color: #F7F7F7; border-radius: 0 0 10px 10px; max-width:1200px;margin: 0 auto; padding: 20px 0;'>
		<center><h2 style='color:#585756;border-bottom: 1px solid #ccc; padding-bottom: 40px;'>Formulario de "$idFormulario"</h2></center>
		<ul style='list-style:none;'>
			<li style='padding: 20px 0;'><b>Nombre del Cliente: </b> ".$nombre."</li>
			<li style='padding: 20px 0;'><b>Telefono del cliente: </b> ".$email."</li>
			<li style='padding: 20px 0;'><b>Email del Cliente: </b> ".$telefono."</li>
			<li style='padding: 20px 0;'><b>Mensaje del cliente: </b> ".$mensaje_cliente."</li>
		</ul>
	</div>	
	";

    $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
    $cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    //Funcion enviar E-mail
	$send = mail ( 'juan.diego.pinzon1993@gmail.com' , 'prueba de envio correo' , $mensaje,$cabeceras);
	
	if ($send) {
		echo 'Correo enviado correctamente';
	}else{
		echo "Problemas al enviar el correo";
	}
    //<---Fin Funcion---->	
?>