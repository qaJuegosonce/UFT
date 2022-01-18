' Se cargan algunos parámetros por funcion


nombreUsu = Inputbox ("Introducir nombre del usuario","Mensaje del QA", "Enrique")

Browser("Registro de usuarios -").Page("Registro de usuarios -").WebEdit("Nombre:").Set nombreUsu @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Registro de usuarios -").Page("Registro de usuarios -").WebElement("html id:=labelSenora").Click
Browser("Registro de usuarios -").Page("Registro de usuarios -").WebEdit("Primer apellido:").Set "Perez" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Registro de usuarios -").Page("Registro de usuarios -").WebEdit("Segundo apellido:").Set "Perez" @@ script infofile_;_ZIP::ssf3.xml_;_

' Para el nie, se utiliza el mismo que el registro

dni=numNie2

Datatable.Value("valorDNI", dtGlobalSheet)=dni


Browser("Registro de usuarios -").Page("Registro de usuarios -").WebEdit("DNI/NIE:").Set dni @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Registro de usuarios -").Page("Registro de usuarios -").WebNumber("diaNacimiento").Set RandomNumber("diaNac") @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Registro de usuarios -").Page("Registro de usuarios -").WebNumber("mesNacimiento").Set RandomNumber("mesNac") @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Registro de usuarios -").Page("Registro de usuarios -").WebNumber("anioNacimiento").Set RandomNumber("anioNac") @@ script infofile_;_ZIP::ssf7.xml_;_

' Para el email pasa lo mismo, se utiliza la funcion correspondiente

correo = email

Browser("Registro de usuarios -").Page("Registro de usuarios -").WebEdit("Email:").Set correo @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Registro de usuarios -").Page("Registro de usuarios -").WebList("tipoVia").Select "Calle" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Registro de usuarios -").Page("Registro de usuarios -").WebEdit("nombreVia").Set "La del manojo" @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Registro de usuarios -").Page("Registro de usuarios -").WebEdit("num").Set RandomNumber("numDir") @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Registro de usuarios -").Page("Registro de usuarios -").WebEdit("codPostal").Set "28549" @@ script infofile_;_ZIP::ssf12.xml_;_

' Nombre del pueblo mas largo de españa - Colinas del Campo de Martín Moro Toledano
' Nombre del mas corto - Ea

Browser("Registro de usuarios -").Page("Registro de usuarios -").WebEdit("poblacion").Set "Colinas del Campo" @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Registro de usuarios -").Page("Registro de usuarios -").WebList("provincia").Select "Leon" @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Registro de usuarios -").Page("Registro de usuarios -").WebList("pais").Select "España" @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Registro de usuarios -").Page("Registro de usuarios -").WebList("Región fiscal: *").Select "Madrid, Comunidad de" @@ script infofile_;_ZIP::ssf16.xml_;_


' Se guarda el dni en una variable que podremos usar en otras pruebas.

Browser("Registro de usuarios -").Page("Registro de usuarios -").WebButton("Dar de Alta").Click


FinAlta=Browser("Registro de usuarios -").Page("Registro de usuarios -").WebElement("html id:=ui-id-2").Exist(10)

If FinAlta Then
	msgbox "Usuario dado de alta"
	Browser("Registro de usuarios -").Page("Registro de usuarios -").WebElement("outertext:=Aceptar","class:=ui-button-text").Click
else
	msgbox "Uf, hubo algun problema"
End If




' En caso de final con error, muestra mensaje y se sale de la prueba. 

wait 1
