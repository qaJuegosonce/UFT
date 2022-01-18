Browser("BackOffice Web de JuegosONCE").Page("BackOffice Web de JuegosONCE").Link("Administración").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("BackOffice Web de JuegosONCE").Page("BackOffice Web de JuegosONCE").Link("Gestión JuegosONCE").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("BackOffice Web de JuegosONCE").Page("BackOffice Web de JuegosONCE").Link("Gestión de clientes accesible").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("BackOffice Web de JuegosONCE").Page("Gestión de clientes accesible").WebEdit("NIF o NIE:").Set DataTable.Value("A",Global) @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("BackOffice Web de JuegosONCE").Page("Gestión de clientes accesible").WebButton("Buscar").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("BackOffice Web de JuegosONCE").Page("Gestión de clientes accesible").Link("Consultar información").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("BackOffice Web de JuegosONCE").Page("Datos de cliente - BackOffice").Link("Verificación documental").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("BackOffice Web de JuegosONCE").Page("Datos de cliente - BackOffice").WebEdit("WebEdit").Set "31/12/2023" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("BackOffice Web de JuegosONCE").Page("Datos de cliente - BackOffice").WebButton("Aceptar").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("BackOffice Web de JuegosONCE").Page("Datos de cliente - BackOffice").WebButton("Aceptar").Click @@ script infofile_;_ZIP::ssf10.xml_;_


VerifManual=Browser("BackOffice Web de JuegosONCE").Page("Datos de cliente - BackOffice_2").WebElement("Verificado documentalmente.").Check(CheckPoint("Verificado documentalmente.")) @@ script infofile_;_ZIP::ssf1.xml_;_

If VerifManual Then
	
	print "El usuario se ha verificado documentalente. Se muestra en la info"
	
else

	msgbox "Algo falló. Ver posibles problemas"
	
End If

print "Se verifica el log de la verificación"

Browser("BackOffice Web de JuegosONCE").Page("Datos de cliente - BackOffice_2").Link("Logs").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("BackOffice Web de JuegosONCE").Page("Logs de cliente - BackOffice").WebList("tipoLog").Select "VERIFICACION_DOCUMENTAL_MANUAL" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("BackOffice Web de JuegosONCE").Page("Logs de cliente - BackOffice").WebButton("Buscar").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("BackOffice Web de JuegosONCE").Page("Logs de cliente - BackOffice").WebElement("0").Check CheckPoint("0") @@ script infofile_;_ZIP::ssf5.xml_;_


Browser("BackOffice Web de JuegosONCE").Page("Logs de cliente - BackOffice").WebElement("Cerrar sesión").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("BackOffice Web de JuegosONCE").Close



wait 1 @@ script infofile_;_ZIP::ssf35.xml_;_

 @@ hightlight id_;_1709106_;_script infofile_;_ZIP::ssf12.xml_;_
