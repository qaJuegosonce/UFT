' Aquí se va a ver el fin del registro

Browser("Confirmación de registro").Page("Confirmación de registro").Sync @@ script infofile_;_ZIP::ssf1.xml_;_
print "Se ha dado de alta el usuario con DOCUMENTO ..." &DataTable.Value("A",Global)

wait 1


confReg=Browser("Confirmación de registro").Page("Confirmación de registro_2").Check(CheckPoint("Confirmación de registro - JuegosONCE")) @@ script infofile_;_ZIP::ssf6.xml_;_

If confReg Then
	
	reporter.ReportEvent micPass, "Registro de usuario" , "El usuario se ha dado de alta correctamente"
	msgbox "Usuario dado de alta correctamente"
	Browser("Confirmación de registro").Page("Confirmación de registro_2").WebButton("Cerrar sesión").Click @@ script infofile_;_ZIP::ssf1.xml_;_
	
	Browser("Confirmación de registro").Close @@ hightlight id_;_4197206_;_script infofile_;_ZIP::ssf3.xml_;_
	wait 1
	
else

	reporter.ReportEvent micFail, "Registro de usuario" , "Algun fallo en el proceso de registro. "
	ExitTest 
	
End If


reporter.ReportEvent micPass, "Registro de usuario" , "El usuario se ha dado de alta correctamente" @@ script infofile_;_ZIP::ssf2.xml_;_

msgbox "Ahora viene la verificación documental, para simplificar manual desde BO"


 @@ script infofile_;_ZIP::ssf3.xml_;_



 @@ script infofile_;_ZIP::ssf5.xml_;_
