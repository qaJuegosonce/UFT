' Ahora se introducen los datos de contacto. Se ha eliminado el telefono 1

Browser("Alta de usuario - JuegosONCE").Page("Alta de usuario - JuegosONCE").WebList("tipoVia").Select "Lugar" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Alta de usuario - JuegosONCE").Page("Alta de usuario - JuegosONCE").WebEdit("nombreVia").Set "El alegre Tester que prueba con ilusión" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Alta de usuario - JuegosONCE").Page("Alta de usuario - JuegosONCE").WebEdit("num").Set "12" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Alta de usuario - JuegosONCE").Page("Alta de usuario - JuegosONCE").WebEdit("bloque").Set "1" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Alta de usuario - JuegosONCE").Page("Alta de usuario - JuegosONCE").WebCheckBox("checkBis").Set "ON" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Alta de usuario - JuegosONCE").Page("Alta de usuario - JuegosONCE").WebEdit("escalera").Set "3" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Alta de usuario - JuegosONCE").Page("Alta de usuario - JuegosONCE").WebEdit("piso").Set "2" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Alta de usuario - JuegosONCE").Page("Alta de usuario - JuegosONCE").WebEdit("puerta").Set "D" @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Alta de usuario - JuegosONCE").Page("Alta de usuario - JuegosONCE").WebEdit("codPostal").Set "28000" @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Alta de usuario - JuegosONCE").Page("Alta de usuario - JuegosONCE").WebEdit("poblacion").Set "Gargantilla del Lozoya y Pinilla de Buitrago" @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Alta de usuario - JuegosONCE").Page("Alta de usuario - JuegosONCE").WebList("provincia").Select "Madrid" @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Alta de usuario - JuegosONCE").Page("Alta de usuario - JuegosONCE").WebList("pais").Select "España" @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Alta de usuario - JuegosONCE").Page("Alta de usuario - JuegosONCE").WebList("Región fiscal").Select "Madrid, Comunidad de" @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Alta de usuario - JuegosONCE").Page("Alta de usuario - JuegosONCE").WebEdit("Teléfono de contacto").Set RandomNumber("NumTelefono") @@ script infofile_;_ZIP::ssf16.xml_;_


Browser("Alta de usuario - JuegosONCE").Page("Alta de usuario - JuegosONCE").WebButton("Registrarme").Click @@ script infofile_;_ZIP::ssf17.xml_;_
