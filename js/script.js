const textoPrincipal = document.querySelector(".texto_principal");
const caixaDireita = document.querySelector(".caixa_direita");



function btcriptar() {
    const textEncriptado = criptar(textoPrincipal.value);
    caixaDireita.innerHTML =  `<p>${textEncriptado}</p>`;
    textoPrincipal.value = "";
    botaoCopiar();
}

function criptar(textoCriptado) {

    let codigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    textoCriptado = textoCriptado.toLowerCase();


    for (let i = 0; i < codigo.length; i++) {
        if(textoCriptado.includes(codigo[i] [0])) {
            textoCriptado = textoCriptado.replaceAll(codigo[i] [0], codigo[i] [1]);
        }
    }

    return textoCriptado;
}

function btDescriptar() {
    const textDesencriptado = descriptar(textoPrincipal.value);
    caixaDireita.innerHTML =  `<p>${textDesencriptado}</p>`;
    textoPrincipal.value = "";
    botaoCopiar();
}

function descriptar(textoDescriptado) {

    let codigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    textoDescriptado = textoDescriptado.toLowerCase();


    for (let i = 0; i < codigo.length; i++) {
        if(textoDescriptado.includes(codigo[i] [1])) {
            textoDescriptado = textoDescriptado.replaceAll(codigo[i] [1], codigo[i] [0]);
        }
    }

    return textoDescriptado;
}

function botaoCopiar() {
    const botaoCopiar = document.createElement("button");
    botaoCopiar.textContent = "Copiar";
    botaoCopiar.className = "bt-copiar";
    botaoCopiar.addEventListener("click", () => {
        const resultado = caixaDireita.querySelector("p").innerText;
        navigator.clipboard.writeText(resultado)
            .then(() => alert('Resultado copiado!'));
    });

    caixaDireita.appendChild(botaoCopiar);
}