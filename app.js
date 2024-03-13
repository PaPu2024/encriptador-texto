const campoTexto = document.querySelector("#textoUsuario");
const campoMensaje = document.querySelector("#campo-mensaje");




function encriptar() {
    var str = campoTexto.value;
    var mapObj = {
        e:"enter",
        i:"imes",
        a:"ai",
        o:"ober",
        u:"ufat"
    }
    str = str.toLowerCase ();
    str = str.replace(/e|i|a|o|u/g, function(matched){
    return mapObj[matched];
    });

    
    document.getElementById("campo-mensaje").value = str;

}

function desencriptar(){
    var str = campoTexto.value;
    var mapObj = {
        enter:"e",
        imes:"i",
        ai:"a",
        ober:"o",
        ufat:"u"
    }
    str = str.toLowerCase ();
    str = str.replace(/enter|imes|ai|ober|ufat/g, function(matched){
    return mapObj[matched];
    });

   
    document.getElementById("campo-mensaje").value = str;
}





function btnCopiar (){
    //copiar al portapapeles
    let textoCopiar = document.getElementById("campo-mensaje");
    let textoC = textoCopiar.value;
    navigator.clipboard.writeText(textoC);

    
      

    //limpiar los texarea
    document.querySelector("#textoUsuario").value = "";
    document.getElementById("campo-mensaje").value = "";
}