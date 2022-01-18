' Se verifican los links de la pantalla principal.


Browser("Usuarios de JuegosONCE").Page("Usuarios de JuegosONCE").Image("Logotipo de JuegosONCE").Click @@ script infofile_;_ZIP::ssf1.xml_;_


'Browser("Usuarios de JuegosONCE").Page("BackOffice Web de JuegosONCE").Link("Administración").Click @@ script infofile_;_ZIP::ssf2.xml_;_
'Browser("Usuarios de JuegosONCE").Page("BackOffice Web de JuegosONCE").WebElement("Gestión JuegosONCE").Check CheckPoint("Gestión JuegosONCE") @@ script infofile_;_ZIP::ssf3.xml_;_

' Hace un check de la página.

Browser("Usuarios de JuegosONCE").Page("BackOffice Web de JuegosONCE").Sync

Browser("Usuarios de JuegosONCE").Page("BackOffice Web de JuegosONCE").Check CheckPoint("BackOffice Web de JuegosONCE") @@ script infofile_;_ZIP::ssf4.xml_;_

Dim oMenu
Set oMenu=Description.Create
oMenu("micclass").value="Link"
'oMenu("height").value=43

' Se verifican todos los links de la  página, con el texto del mismo

Set k=Browser("Usuarios de JuegosONCE").Page("BackOffice Web de JuegosONCE").ChildObjects(oMenu)
print "Hay " &k.count &" enlaces" 


For i = 0 To k.count-1 
	p=k(i).getROProperty("innertext")
	print "Enlace " &i &" a " &p&" correcto"
Next
