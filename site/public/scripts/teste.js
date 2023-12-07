const serialport = require('serialport');
const express = require('express');
const mysql = require('mysql2');

const SERIAL_BAUD_RATE = 9600;
const SERVIDOR_PORTA = 3000;
const HABILITAR_OPERACAO_INSERIR = true;

const serial = async (
    valoresLm35Temperatura,
    valoresDht11Umidade
    // valoresDht11Temperatura,
    // valoresLuminosidade,
    // valoresChave
) => {
    const poolBancoDados = mysql.createPool(
        {
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '#Vanuza23',
            database: 'TechApulus_sprint2_teste'
        }
    ).promise();

    const portas = await serialport.SerialPort.list();
    const portaArduino = portas.find((porta) => porta.vendorId == 2341 && porta.productId == 43);
    if (!portaArduino) {
        throw new Error('O arduino não foi encontrado em nenhuma porta serial');
    }
    const arduino = new serialport.SerialPort(
        {
            path: portaArduino.path,
            baudRate: SERIAL_BAUD_RATE
        }
    );
    arduino.on('open', () => {
        console.log(`A leitura do arduino foi iniciada na porta ${portaArduino.path} utilizando Baud Rate de ${SERIAL_BAUD_RATE}`);
    });
    arduino.pipe(new serialport.ReadlineParser({ delimiter: '\r\n' })).on('data', async (data) => {
        const valores = data.split(',');
        const lm35Temperatura = parseFloat(valores[0]);
        const dht11Umidade = parseFloat(valores[1]);
        // const luminosidade = parseFloat(valores[3]);
        // const dht11Temperatura = parseFloat(valores[4]);
        // const chave = parseInt(valores[5]);

        valoresLm35Temperatura.push(lm35Temperatura);
        valoresDht11Umidade.push(dht11Umidade);
        // valoresDht11Temperatura.push(dht11Temperatura);
        // valoresLuminosidade.push(luminosidade);
        // valoresChave.push(chave);

        if (HABILITAR_OPERACAO_INSERIR) {
            await poolBancoDados.execute(
                `INSERT INTO sensores (lm35_temperatura, dht11_umidade) VALUES (${lm35Temperatura}, ${dht11Umidade});`,
            );
        }

    });
    arduino.on('error', (mensagem) => {
        console.error(`Erro no arduino (Mensagem: ${mensagem}`)
    });
}

const servidor = (
    valoresLm35Temperatura,
    valoresDht11Umidade
    // valoresDht11Temperatura,
    // valoresLuminosidade,
    // valoresChave
) => {
    const app = express();
    app.use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        next();
    });
    app.listen(SERVIDOR_PORTA, () => {
        console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`);
    });
    app.get('/sensores/lm35/temperatura', (_, response) => {
        return response.json(valoresLm35Temperatura);
    });
    app.get('/sensores/dht11/umidade', (_, response) => {
        return response.json(valoresDht11Umidade);
    });
    // app.get('/sensores/dht11/temperatura', (_, response) => {
    //     return response.json(valoresDht11Temperatura);
    // });
    // app.get('/sensores/luminosidade', (_, response) => {
    //     return response.json(valoresLuminosidade);
    // });
    // app.get('/sensores/chave', (_, response) => {
    //     return response.json(valoresChave);
    // });
}

(async () => {
    const valoresLm35Temperatura = [];
    const valoresDht11Umidade = [];
    // const valoresDht11Temperatura = [];
    // const valoresLuminosidade = [];
    // const valoresChave = [];
    await serial(
        valoresLm35Temperatura,
        valoresDht11Umidade
        // valoresDht11Temperatura,
        // valoresLuminosidade,
        // valoresChave
    );
    servidor(
        valoresLm35Temperatura,
        valoresDht11Umidade
        // valoresDht11Temperatura,
        // valoresLuminosidade,
        // valoresChave
    );
})();


/* -- dht11Umidade -- */
var contextoDht11Umidade = document.getElementById(`dht11umidade`).getContext('2d');
contextoDht11Umidade.canvas.width = 1000;
contextoDht11Umidade.canvas.height = 300;
var dht11Umidade = new Chart(
    contextoDht11Umidade,
    {
        type: 'line',
        data: {
            datasets: [{
                label: 'Umidade',
                type: 'line',
                borderColor: ['#45b3e7'],
                backgroundColor: ['#89cff0']
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    distribution: 'series',
                    ticks: {
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Umidade'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            animation: {
                duration: 0
            }
        }
    }
);

/* -- lm35Temperatura */
var contextoLm35Temperatura = document.getElementById(`lm35Temperatura`).getContext('2d');
contextoLm35Temperatura.canvas.width = 1000;
contextoLm35Temperatura.canvas.height = 300;
var lm35Temperatura = new Chart(
    contextoLm35Temperatura,
    {
        type: 'line',
        data: {
            datasets: [{
                label: 'Temperatura',
                type: 'line',
                borderColor: ['#ffd902'],
                backgroundColor: ['#ffe135']
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    distribution: 'series',
                    ticks: {
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Temperatura'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            animation: {
                duration: 0
            }
        }
    }
);

setInterval(() => {
    obterDados(dht11Umidade, 'dht11/umidade');
    obterDados(lm35Temperatura, 'lm35/temperatura');
}, 1000);