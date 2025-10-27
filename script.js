// Programación para cambiar de articulo en button menu
const botonMenu = document.getElementById('boton-menu');
const listaMenu = document.getElementById('lista-menu');
botonMenu.addEventListener('click', () => {
    listaMenu.style.display = listaMenu.style.display === 'block' ? 'none' : 'block';
});


botonMenu.addEventListener('click', () => {
    listaMenu.classList.toggle('activo');
});

document.addEventListener('click', (e) => {
    if (!listaMenu.contains(e.target) && !botonMenu.contains(e.target)) {
        listaMenu.classList.remove('activo');
    }
});

listaMenu.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
        const seccion = document.getElementById(targetId);
        if (seccion) {
            seccion.scrollIntoView({ behavior: 'smooth' });
        }
        listaMenu.classList.remove('activo');
    });
});

// Porgramación para el formulario
const form = document.getElementById('palabra-form');
const resultado = document.getElementById('resultado');
const palabraSecreta = "pibble";

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const entrada = document.getElementById('palabra').value.trim();
    if (entrada.toLowerCase() === palabraSecreta.toLowerCase()) {
        resultado.innerHTML = `
                        <p>PIBBLE</p>
                        <img src="https://i.pinimg.com/736x/e8/0f/96/e80f963634e6a7aa03ad5e510512f6ee.jpg"
                        alt="secreto..." style="max-width:300px; border-radius:8px;">
                        <p>Felicidades, has encontrado el pibble cuyo unico propósito es abarcar los tags que no alcanzaron a ser usados arriba XD</p>
                    `;
    } else {
        resultado.innerHTML = "<p>Le atinaste!! Aa te creas no rifas bro</p>";
    }
});