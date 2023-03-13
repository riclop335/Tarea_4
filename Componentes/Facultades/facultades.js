let formulario = document.getElementById('form_facultades');


function lim_sedes()
{   
    formulario.reset();
}

function esc_sedes(){
   
    var nombre = document.getElementById("nom_sede").value;
    var direccion = document.getElementById("dir_sede").value;
    var telefono = document.getElementById("tel_sede").value;
    var email = document.getElementById("email_sede").value;
    
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var fh = fso.OpenTextFile("sedes.txt", 8, false, 0);
    fh.WriteLine(formulario);
    fh.Close();
}