'Actualizado por la ejecución de mantenimiento de la prueba

Dim Elemento

SystemUtil.Run "chrome.exe","http://www.getcreditcardnumbers.com/"

Browser("Credit Card Numbers Generator | Get Fake Credit Card Numbers for Testing Purposes").Sync

'Browser("Credit Card Numbers Generator").Sync @@ hightlight id_;_2231338_;_script infofile_;_ssf1.xml_;_


Elemento = Browser("Credit Card Numbers Generator | Get Fake Credit Card Numbers for Testing Purposes").Page("Credit Card Numbers Generator | Get Fake Credit Card Numbers for Testing Purposes").WebElement("xpath:=//body[1]/div[1]/div[3]/div[2]/ul[1]/li[1]").GetROProperty("innerhtml")

print "Utilizamos la tarjeta Master Card " &Elemento

Browser("Credit Card Numbers Generator | Get Fake Credit Card Numbers for Testing Purposes").Close

' Crea una columna DatoVisa y le carga el número de la visa para usarlo en el alta del usuario

DataTable.AddSheet("AltaPayPal")
DataTable.GetSheet("AltaPayPal").AddParameter "TarjetaMC", Elemento


wait 2




