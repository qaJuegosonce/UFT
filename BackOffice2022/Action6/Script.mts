' Primero se graba la fecha de alta del usuario

Browser("Usuarios de JuegosONCE").Page("Usuarios de JuegosONCE").Image("Logotipo de JuegosONCE").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Usuarios de JuegosONCE").Page("BackOffice Web de JuegosONCE").Link("Administración").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Usuarios de JuegosONCE").Page("BackOffice Web de JuegosONCE").Link("Gestión JuegosONCE").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Usuarios de JuegosONCE").Page("BackOffice Web de JuegosONCE").Link("Gestión de clientes accesible").Click @@ script infofile_;_ZIP::ssf4.xml_;_
 @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Usuarios de JuegosONCE").Page("Gestión de clientes accesible").WebElement("Primer apellido:_2").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Usuarios de JuegosONCE").Page("Gestión de clientes accesible").WebEdit("Primer apellido:").Set "Perez" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Usuarios de JuegosONCE").Page("Gestión de clientes accesible").WebButton("Buscar").Click @@ script infofile_;_ZIP::ssf9.xml_;_

' Se va a intentar filtrar el registro donde haya usuarios Activados  -- 


'Browser("Usuarios de JuegosONCE").Page("Gestión de clientes accesible").WebElement("Código de cliente").Check CheckPoint("Código de cliente") @@ script infofile_;_ZIP::ssf10.xml_;_

	Dim tablaExist
	
	tablaExist=Browser("Usuarios de JuegosONCE").Page("Gestión de clientes accesible").WebTable("class:=gclientes").Exist
	print tablaExist
	
	
	If tablaExist Then
	' Buscamos el texto Activado y hacemos link para ver el cliente 
	
		irownum = Browser("Usuarios de JuegosONCE").Page("Gestión de clientes accesible").WebTable("class:=gclientes").GetRowWithCellText ("Activado")
		If irownum>0 Then
			msgbox "Hay número activado"
			set objCelula=Browser("Usuarios de JuegosONCE").Page("Gestión de clientes accesible").WebTable("class:=gclientes").ChildItem(irownum,8,"link",0)
			objCelula.click
		Else 
			msgbox "No hay números activos"
		End If 
		
Else	
	
	msgbox("No hay tabla")

End If


For i  = 1 To 7 

subM="xpath:=/html[1]/body[1]/div[1]/section[1]/nav[1]/ul[1]/li["&i&"]/a[1]"
titSub=Browser("Usuarios de JuegosONCE").Page("Gestión de clientes accesible").WebElement(SubM).GetROProperty("innertext")
print "Submenu - " &titSub

Browser("Usuarios de JuegosONCE").Page("Gestión de clientes accesible").WebElement(SubM).Click
'print k.GetROProperty
msgbox "Verifica el submenu -" &titSub &" - y pulsa Aceptar" 

Next

wait 1
