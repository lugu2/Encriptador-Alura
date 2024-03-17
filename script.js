const campo_texto = document.querySelector("#texto-encriptar");
const campo_resultado = document.querySelector("#texto-resultado");
const img_resultado = document.querySelector( ".campo-sinresultado");
const boton_copiar=document.querySelector(".conten-copy")
/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/
const matriz_encrip = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function btnencriptar() {
    const texto = encriptar(campo_texto.value);
    if(campo_texto.value == ""){
        alert("Por favor, ingresa un texto que podamos encriptar.");
    }else{   
        campo_resultado.style.display="block";
        campo_resultado.textContent = texto
        campo_texto.value= "";
        img_resultado.style.display = "none";
        boton_copiar.style.display="";

    }
}

function btndesencriptar() {
    const texto = desencriptar(campo_texto.value);
    if(campo_texto.value == ""){
        alert("Por favor, ingresa un texto que podamos desencriptar.");
    }else{   
        campo_resultado.textContent = texto
        campo_texto.value= "";
        img_resultado.style.display = "none";

        console.log(texto);
    }
}


function btncopiar(){
    if (campo_resultado.textContent !== ""){
        navigator.clipboard.writeText(campo_resultado.textContent)
            .then(() => { alert("El texto fue copiado")  })
            .catch(err => { alert("Error al copiar el texto") });
    } else {
        alert("No se encontro texto");
    }
}

function encriptar(fraseEncriptar) {
    for(let i=0;i<matriz_encrip.length;i++){
        if(fraseEncriptar.includes(matriz_encrip[i][0])){
            fraseEncriptar = fraseEncriptar.replaceAll(
                matriz_encrip[i][0],
                matriz_encrip[i][1]
            )
        }
    }
    return fraseEncriptar;
}

function desencriptar(fraseDesencriptar) {
    for(let i=0;i<matriz_encrip.length;i++){
        if(fraseDesencriptar.includes(matriz_encrip[i][1])){
            fraseDesencriptar = fraseDesencriptar.replaceAll(
                matriz_encrip[i][1],
                matriz_encrip[i][0]
            )
        }
    }
    return fraseDesencriptar;
}