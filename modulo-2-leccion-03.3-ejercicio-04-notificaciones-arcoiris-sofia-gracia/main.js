const container = document.querySelector(".container");

if (container.classList.contains('warning')) {
    container.innerHTML= `<h1>aviso</h1><p>Tenga cuidado</p>`;

} else if (container.classList.contains('error')) {
    container.innerHTML= `<h1>error</h1><p>Ha surgido un error</p>`;

} else if (container.classList.contains('sucess')) {
    container.innerHTML= `<h1>correcto</h1><p>Los datos son correctos</p>`;
}