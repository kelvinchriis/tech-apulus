// Base para criação de gráficos dinâmica, não funciona direito, mas tá caminhando >:)

const btnAdd = document.querySelector('#btnAddGraf'),
    telaFazendas = document.querySelector('.grafFazendas');

btnAdd.addEventListener('click', () => {

    telaFazendas.innerHTML += `<canvas id="myChartCanvas"></canvas>`

    let labels = [];

    let dados = {
        labels: labels,
        datasets: [{
            labels: 'Umidade',
            data: [23, 24, 28, 22, 24],
            // fill: false,
            borderColor: '#9c6b43',
            tension: 0.1
        },
        {
            label: 'Temperatura',
            data: [55, 57, 59, 65, 62],
            // fill: false,
            borderColor: 'rgb(255, 0, 0)',
            tension: 0.1
        }]
    };

    const config = {
        type: 'line',
        data: dados,
    };

    let myChart = new Chart(
        document.getElementById(`myChartCanvas`),
        config
    );
})