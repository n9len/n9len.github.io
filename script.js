const botonMenu = document.getElementById('boton-menu');
const listaMenu = document.getElementById('lista-menu');

listaMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const seccionId = e.target.getAttribute('data-target');
        const seccionNombre = e.target.textContent;

        if (seccionId) {
            document.getElementById(seccionId).scrollIntoView({behavior: 'smooth'});
        }

        botonMenu.textContent = `☰ ${seccionNombre}`;
        listaMenu.style.display = 'none';
    }
});

botonMenu.addEventListener('click', () => {
    listaMenu.style.display = (listaMenu.style.display === 'block') ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
    if (!botonMenu.contains(e.target) && !listaMenu.contains(e.target)) {
        listaMenu.style.display = 'none';
    }
});
