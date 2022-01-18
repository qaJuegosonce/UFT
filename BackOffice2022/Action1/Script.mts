' Se carga un mensaje con lo que hace el script

msgbox "Pruebas regresivas de BO. Se hace lo siguiente: "&vbCr &"1.- Acceso a BO "& vbCr _
&"2.- Recorrido por todos los menús (mejorable)." & vbCr &"3.- Alta de un usuario." & vbCr _
&"4.- Consulta de ese usuario en Gestion de clientes accesibles." & vbCr &"5.- Acceso a JO y cambio de contraseña. "& vbCr &_
"6.- Verificación de identidad y logs. "& vbCr



' Se accede a la página. Ojo a la contraseña de BO, que caduca cada tres meses... Ultima actualización 26/04/2019

SystemUtil.Run "chrome.exe" , "https://boi.juegosonce.es/login"

msgbox "Ojo a la contraseña, que puede estar caducada"


Browser("BackOffice de JuegosONCE").Page("BackOffice de JuegosONCE").Sync

' Se loga el usuario (ojo a la caducidad de la contraseña)

Browser("BackOffice de JuegosONCE").Page("BackOffice de JuegosONCE").WebEdit("html id:=user").Set "mateloen"
Browser("BackOffice de JuegosONCE").Page("BackOffice de JuegosONCE").WebEdit("html id:=password").SetSecure "61b1b3060709994c2ce689f3db572f0cf4bf3da6be5db3aed662b4f190c8f505091aafd20e42331c"
wait(2)
Browser("BackOffice de JuegosONCE").Page("BackOffice de JuegosONCE").WebButton("html id:=btnLogin").Click
 @@ script infofile_;_ZIP::ssf4.xml_;_

wait 1
 @@ script infofile_;_ZIP::ssf4.xml_;_
 @@ script infofile_;_ZIP::ssf5.xml_;_
