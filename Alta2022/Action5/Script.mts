'Arranca la página de registro" 

msgbox "Prueba lanzada por " &Environment.Value("UserName")

'SystemUtil.Run "chrome.exe", "https://int.juegosonce.es/"
SystemUtil.Run "chrome.exe", "https://act.juegosonce.es/"

' Se aceptan las cookies, ya que si no el popup te persigue por toda la prueba

Browser("JuegosONCE – Web oficial").Page("JuegosONCE – Web oficial").Sync

'msgbox "Se van a verificar datos de las cookies, durante varios sprints se va a verificar, desde el 83" @@ hightlight id_;_10000000_;_script infofile_;_ssf33.xml_;_


chkCook=Browser("JuegosONCE – Web oficial").Page("JuegosONCE – Web oficial_3").WebElement("cookie-consent-desc").Check(CheckPoint("cookie-consent-desc")) @@ script infofile_;_ZIP::ssf35.xml_;_


If chkCook Then
	
Browser("JuegosONCE – Web oficial").Page("JuegosONCE – Web oficial_3").WebButton("Aceptar todas").Click @@ script infofile_;_ZIP::ssf34.xml_;_

else

msgbox "Ya se seleccionaron las cookies"

End If

wait 2 @@ script infofile_;_ZIP::ssf37.xml_;_


'Browser("JuegosONCE – Web oficial").Page("JuegosONCE – Web oficial_3").Check CheckPoint("JuegosONCE – Web oficial de la lotería de la ONCE") @@ script infofile_;_ZIP::ssf36.xml_;_

Browser("JuegosONCE – Web oficial").Page("JuegosONCE – Web oficial").Link("Regístrate").Click @@ script infofile_;_ZIP::ssf24.xml_;_
 @@ script infofile_;_ZIP::ssf28.xml_;_
Browser("Registro datos personales - JuegosONCE").Page("Registro datos personales - JuegosONCE").Sync



nombre=inputbox ("Introducir nombre, para temas de pruebas...:")

Browser("Registro datos personales - JuegosONCE").Page("Registro datos personales - JuegosONCE").WebEdit("Nombre igual que en tu DNI").Set nombre
Browser("Registro datos personales - JuegosONCE").Page("Registro datos personales - JuegosONCE").WebEdit("html id:=apellido1").Set "Con dieresis Güey "
'Browser("Registro datos personales - JuegosONCE").Page("Registro datos personales - JuegosONCE").WebEdit("Nombre igual que en tu DNI").Set "Perez"
Browser("Registro datos personales - JuegosONCE").Page("Registro datos personales - JuegosONCE").WebEdit("html id:=apellido2").Set "So Perez Gomez" @@ script infofile_;_ZIP::ssf8.xml_;_

'Para el dni se ejecuta una funcion. Se graba el dni en la tabla global, para usos posteriores

dni=numNie2

DataTable.GlobalSheet.AddParameter "A", 1
DataTable.Value("A",Global)=dni

Browser("Registro datos personales - JuegosONCE").Page("Registro datos personales - JuegosONCE").WebEdit("html id:=dni").Set dni @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Registro datos personales - JuegosONCE").Page("Registro datos personales - JuegosONCE").WebEdit("html id:=diaNacimiento").Set RandomNumber("DiaNacimiento") @@ script infofile_;_ZIP::ssf10.xml_;_

mesNac=seleccionaMes

Browser("Registro datos personales - JuegosONCE").Page("Registro datos personales - JuegosONCE").WebList("html id:=mesNacimiento").Select mesNac @@ script infofile_;_ZIP::ssf11.xml_;_
'Browser("Registro datos personales - JuegosONCE").Page("Registro datos personales - JuegosONCE").WebList("html id:=mesNacimiento").Select "Enero"
Browser("Registro datos personales - JuegosONCE").Page("Registro datos personales - JuegosONCE").WebEdit("html id:=anioNacimiento").Set RandomNumber("anioNacimiento") @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Registro datos personales - JuegosONCE").Page("Registro datos personales - JuegosONCE").WebElement("html id:=labelSenor").Click @@ script infofile_;_ZIP::ssf13.xml_;_

'Para el email (y el repemail) tambien otra funcion. Si están comentadas, es que me da igual el correo con el que se de de alta. Por defecto es e.terrer@ibermatica.com

'En pruebas donde no importe el correo se deben activar las tres líneas siguientes. 
'correo = email
'Browser("Registro datos personales - JuegosONCE").Page("Registro datos personales - JuegosONCE").WebEdit("html id:=Email").Set correo @@ script infofile_;_ZIP::ssf14.xml_;_
'Browser("Registro datos personales - JuegosONCE").Page("Registro datos personales - JuegosONCE").WebEdit("html id:=emailRep").Set correo @@ script infofile_;_ZIP::ssf15.xml_;_

' En pruebas de regresión se descomentan las lineas de abajo

email1=email
Browser("Registro datos personales - JuegosONCE").Page("Registro datos personales - JuegosONCE").WebEdit("html id:=Email").Set email1
Browser("Registro datos personales - JuegosONCE").Page("Registro datos personales - JuegosONCE").WebEdit("html id:=emailRep").Set email1

Browser("Registro datos personales - JuegosONCE").Page("Registro datos personales - JuegosONCE").WebEdit("html id:=contrasenia").SetSecure "5c8f93c61b626c70c58d9ca560162bac0b8360633efdc68a2eb2c693d738" @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Registro datos personales - JuegosONCE").Page("Registro datos personales - JuegosONCE").WebEdit("html id:=contraseniaRep").SetSecure "5c8f93c61b626c70c58d9ca560162bac0b8360633efdc68a2eb2c693d738" @@ script infofile_;_ZIP::ssf17.xml_;_

'Para el kaptcha otra funcion

captcha = grabaCatxa

Browser("Registro datos personales - JuegosONCE").Page("Registro datos personales - JuegosONCE").WebEdit("html id:=captcha").Set captcha @@ script infofile_;_ZIP::ssf18.xml_;_
 @@ script infofile_;_ZIP::ssf20.xml_;_
' Ahora los permisos para finalizar el primer formulario


Browser("Registro datos personales - JuegosONCE").Page("Registro datos personales - JuegosONCE").WebElement("class:=req","Index:=0").Click
Browser("Registro datos personales - JuegosONCE").Page("Registro datos personales - JuegosONCE").WebElement("class:=req","Index:=1").Click


'Verificar todos los datos antes de pulsar continuar

Browser("JuegosONCE – Web oficial").Page("Alta de usuario - JuegosONCE").WebButton("Continuar").Click @@ script infofile_;_ZIP::ssf21.xml_;_

wait 1
 @@ hightlight id_;_10000000_;_script infofile_;_ssf32.xml_;_


