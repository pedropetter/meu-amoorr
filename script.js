// Defina a data de início com a hora e o fuso horário corretos
const startDate = new Date('2024-10-10T00:00:00-03:00'); // UTC-3 para o horário de Brasília

function updateCountdown() {
    const now = new Date(); // Data e hora atuais
    const timeDiff = now - startDate; // Diferença de tempo

    const seconds = Math.floor((timeDiff / 1000) % 60);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    // Atualize os elementos do DOM com os valores calculados
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months % 12; // Módulo para meses
    document.getElementById('days').textContent = days % 30; // Módulo para dias
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Chame a função de atualização a cada segundo
setInterval(updateCountdown, 1000);