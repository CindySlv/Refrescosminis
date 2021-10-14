function ingresar()
{

var usuario="cindy"
var contraseña="examen"; 

if (document.frmingreso.txtusuario.value==usuario &&
    document.frmingreso.txtcontraseña.value==contraseña)   
{
    document.location="html/Inicio.html"
}
else
{
    alert("ingrese usuario y contraseña correctamente")
}

}

