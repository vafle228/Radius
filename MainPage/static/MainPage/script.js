var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var lineCanvas = document.getElementById("line");
var lineCtx = lineCanvas.getContext("2d");

width = 700
height = 500

function drawGrafics(data, labels, consumption){
    let colors = []
    for(let i = 0; i < data.length; i++){
        r = Math.floor(Math.random() * 240);
        g = Math.floor(Math.random() * 240);
        b = Math.floor(Math.random() * 240);

        color = `rgb(${r}, ${g}, ${b})`
        if(!(color in colors)) { colors.push(color); }

    }

    options = {
        legend: {
            display: true,
            position: 'bottom'
        }
    }

    let datasets = {
        datasets: [{
            data: data,
            backgroundColor: colors,
        }],

        labels: labels
    };

    let PieChart = new Chart(ctx, {
        type: 'pie',
        data: datasets,
        options: options,
    });

    datasets = {
        datasets: [{
            data: data,
            borderColor: '#ffc107',
            fill: 'rgb(255, 255, 255)',
        }],

        labels: labels
    };

    let LineChart = new Chart(lineCtx, {
        type: 'line',
        data: datasets,
        options: {legend: {display: false}, maintainAspectRatio: false},
    });

    PieChart.canvas.parentNode.style.height = `${height}px`;
    PieChart.canvas.parentNode.style.width = `${width}px`;

    LineChart.canvas.parentNode.style.height = `200px`;
    LineChart.canvas.parentNode.style.width = `500px`;

    let electricity = document.getElementById('pulse_value');
    electricity.innerHTML = consumption
}