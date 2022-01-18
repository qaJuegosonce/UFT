' Se va a crear la extructura de los directorios cuando se lanzan las pruebas regresivas de un sprint. 

Dim pathVersion, fso, f
Dim strFolder,oFolder

'Se introduce la versión del sprint. A partir de aquí, se crean varios directorios donde van a dejarse las evidencias. 
' Lo que hace es crear los directorios que creamos habitualmente a mano. Solicita solo el número de Sprint
' A partir de ahí lo hace todo. Crear los subdirectorios.

versSprint=inputbox("Número del sprint:  ", "Mensaje de QA"  )

'pathBase="\\ibdatho\area\Grupos\Distribucion-Juego\JuegosOnce\GrupoQA\EVIDENCIAS"

' Se verifica que existe el directorio.

Set fso = CreateObject("Scripting.FileSystemObject")
'dirBase="D:\etl\nuevoONCE\UFT\Sprint"
dirBase="\\ibdatho\area\Grupos\Distribucion-Juego\JuegosOnce\GrupoQA\EVIDENCIAS\2022\Sprint"
dirbase1=dirBase&versSprint
dirEvid=dirbase1 &"\sprint"&versSprint
print dirbase2

dirBO=dirEvid&"\BackOffice"
dirLog=dirEvid&"\Fichero Log"
dirInf=dirEvid&"\InformeRegresiva"
dirIma=dirEvid&"\Imagenes"
dirmails=dirEvid&"\mails"
dirRen=dirEvid&"\Pruebas_Rendimiento"
dirMov=dirEvid&"\Regresion Mobile"
dirSonar=dirEvid&"\Sonar"


' Se verifica que existe el directorio.

'If fso.FolderExists(strFolder) = False Then
If fso.FolderExists(dirbase1) = False Then
	'Set oFolder=fso.CreateFolder(strFolder)
	print "Creando estructura de Evidencias del sprint " &versSprint
	Set oFolder=fso.CreateFolder(dirbase1)
	Set oFolder=fso.CreateFolder(dirEvid)
	Set oFolder=fso.CreateFolder(dirBO)
	Set oFolder=fso.CreateFolder(dirLog)
	Set oFolder=fso.CreateFolder(dirInf)
	Set oFolder=fso.CreateFolder(dirIma)
	Set oFolder=fso.CreateFolder(dirmails)
	Set oFolder=fso.CreateFolder(dirRen)
	Set oFolder=fso.CreateFolder(dirMov)
	Set oFolder=fso.CreateFolder(dirSonar)
	print "Se creo la carpeta " &dirEvid
	else
	msgbox "La carpeta existe"
	'WScript.Quit
End If


