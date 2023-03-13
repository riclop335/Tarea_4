document.querySelector('#bsede_registrar').addEventListener('clic',registrar_sede);

function registrar_sede(){
    var nsede = [],
        snombre = '',
        sdireccion = '',
        stelefono = '',
        semail = '';

    nsede = document.querySelector('#nom_sede').value;
    sdireccion = document.querySelector('#dir_sede').value;
    stelefono = document.querySelector('#tel_sede').value;
    semail = document.querySelector('#email_sede').value;

    nsede.push(snombre, sdireccion, stelefono, semail);
    
}