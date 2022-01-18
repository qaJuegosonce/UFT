'Se verifica el usuario

dni=Datatable.Value("valorDNI",dtGlobalSheet)

print "Se va a verificar datos del usuario " &dni &" con un pantallazo"

Browser("Registro de usuarios -").Page("Registro de usuarios -").Link("Administración").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Registro de usuarios -").Page("Registro de usuarios -").Link("Gestión de clientes").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Registro de usuarios -").Page("Usuarios de JuegosONCE").WebEdit("nifonie").Set dni @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Registro de usuarios -").Page("Usuarios de JuegosONCE").WebButton("buscaClientes").Click @@ script infofile_;_ZIP::ssf4.xml_;_

Set oTablaUser=Browser("Registro de usuarios -").Page("Usuarios de JuegosONCE_4").WebElement("html id:=gbox_gridClientes").Object.getElementsByTagName("tr")
passNcliBO=left(cstr(oTablaUser.Item(2).getAttribute("id")),8)
Datatable.Value("passNcli",dtGlobalSheet)=passNcliBO

'Browser("Registro de usuarios -").Page("Usuarios de JuegosONCE_4").WebElement("1000000018").Output CheckPoint("1000000018") @@ script infofile_;_ZIP::ssf10.xml_;_

Browser("Registro de usuarios -").Page("Usuarios de JuegosONCE").WebElement("PEREZ").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Registro de usuarios -").Page("Usuarios de JuegosONCE").WebButton("verCliente").Click @@ script infofile_;_ZIP::ssf6.xml_;_

msgbox "Imprimir la pantalla para evidencias..."


msgbox "Ahora pasamos de submenu a submenu para verificar cada una de las secciones."

'Browser("Registro de usuarios -").Page("Usuarios de JuegosONCE_3").WebElement("ui-id-2").Check CheckPoint("ui-id-2") @@ script infofile_;_ZIP::ssf9.xml_;_


For i  = 2 To 8 

subM="xpath:=//a[@id='ui-id-"&i&"']"
'print subM

titSub=Browser("Registro de usuarios -").Page("Usuarios de JuegosONCE").WebElement(SubM).GetROProperty("innertext")
'titSub=Browser("Usuarios de JuegosONCE").Page("Gestión de clientes accesible").WebElement(SubM).GetROProperty("innertext")

print "Submenu - " &titSub

Browser("Registro de usuarios -").Page("Usuarios de JuegosONCE").WebElement(SubM).Click
'print k.GetROProperty
msgbox "Verifica el submenu - " &titSub &" - y pulsa Aceptar" 

Next

'Deslogamos y cerramos BO'


Browser("Registro de usuarios -").Page("Usuarios de JuegosONCE_5").WebElement("Cerrar sesión").Click @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Registro de usuarios -").Close

msgbox "Ahora entramos en juegosONCE y cambiamos password"

SystemUtil.Run "chrome.exe", "https://int.juegosonce.es/"

pasUser=crypt.Encrypt(passNcliBO)
print pasUser


Browser("Registro de usuarios -").Page("JuegosONCE – Web oficial").WebEdit("html id:=username").Set dni @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Registro de usuarios -").Page("JuegosONCE – Web oficial").WebEdit("html id:=password").Set passNcliBO
Browser("Registro de usuarios -").Page("JuegosONCE – Web oficial").WebButton("Acceder").Click @@ script infofile_;_ZIP::ssf13.xml_;_


'chckVer=Browser("Registro de usuarios -").Page("Restablecer contraseña_3").WebElement("gtmPopUp-desc0").(Check CheckPoint("gtmPopUp-desc0")) @@ script infofile_;_ZIP::ssf20.xml_;_

Browser("Registro de usuarios -").Page("Restablecer contraseña_3").Link("Verifica tu identidad").Click @@ script infofile_;_ZIP::ssf21.xml_;_
chkCamPass=Browser("Registro de usuarios -").Page("Restablecer contraseña").WebElement("contenido").Check(CheckPoint("contenido")) @@ script infofile_;_ZIP::ssf14.xml_;_

If chkCamPass Then

Browser("Registro de usuarios -").Page("Restablecer contraseña").WebEdit("passNueva").SetSecure "6149c5ebd759f3cabd0ab88d4f529b2200cc296fb9204bdb3fbca00c74ae" @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Registro de usuarios -").Page("Restablecer contraseña").WebEdit("passNuevaRep").SetSecure "6149c5f3c43f669b8ce413e1ca45414f2521b24d102bc985b7e516cf4c9f" @@ script infofile_;_ZIP::ssf16.xml_;_

wait 3
Browser("Registro de usuarios -").Page("Restablecer contraseña").WebButton("Guardar").Click @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("Registro de usuarios -").Page("Restablecer contraseña_2").WebElement("¡Enhorabuena!").Check CheckPoint("¡Enhorabuena!") @@ script infofile_;_ZIP::ssf18.xml_;_
Browser("Registro de usuarios -").Page("Restablecer contraseña_2").WebButton("Cerrar sesión").Click @@ script infofile_;_ZIP::ssf19.xml_;_

else

	msgbox "Algo ha salido mal..."

End If
Browser("Registro de usuarios -").Close

wait 1
