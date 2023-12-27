document.addEventListener('DOMContentLoaded', function () {
    // Agrega la lógica de JavaScript aquí

    // Ejemplo de cambio de color al hacer clic en el botón
    var botonColor = document.getElementById('cambiarColor');
    botonColor.addEventListener('click', function () {
        document.body.style.backgroundColor = getRandomColor();
    });

    // Función para generar colores aleatorios
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
