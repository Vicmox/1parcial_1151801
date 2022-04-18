function guardar(){
   $(document).ready(function(){    
    $('#boton-guardar').click(function(){        
        var cod = document.getElementById("cod").value;
        var pass = document.getElementById("pass").value;
        localStorage.setItem("Codigo", cod);
        localStorage.setItem("Contraseña", pass);
        document.getElementById("cod").value = "";
        document.getElementById("pass").value = "";
    }); 
}
