function actualizarContador() {
    const fechaInicial = new Date('2023-10-25T00:00:00');
    const ahora = new Date();
    const diferencia = ahora - fechaInicial;

    const anos = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diferencia % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diferencia % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('contador').innerText = `${anos} años, ${meses} meses, ${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

setInterval(actualizarContador, 1000);
