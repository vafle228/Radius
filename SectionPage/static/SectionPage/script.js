var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

width = 700
height = 500

function drawGistogram(data, labels, consumption){
    let colors = []
    let borders = []
    for(let i = 0; i < data.length; i++){
        r = Math.floor(Math.random() * 200);
        g = Math.floor(Math.random() * 200);
        b = Math.floor(Math.random() * 200);

        border = `rgb(${r}, ${g}, ${b})`;
        color = `rgba(${r}, ${g}, ${b}, 0.6)`
        if(!(color in colors)) { colors.push(color); borders.push(border) }

    }

    options = {
        legend: {
            display: false,
        }
    }


    dataset = {
        datasets: [{
            data: data,
            borderColor: borders,
            backgroundColor: colors,
            borderWidth: 2,
            barPercentage: 0.5,
            barThickness: Math.floor(width / data.length) - 10,
            minBarLength: 2,
        }],

        labels: labels
    };

    var myBarChart = new Chart(ctx, {
        type: 'bar',
        options: options,
        data: dataset,
        
    });
    myBarChart.canvas.parentNode.style.height = `${height}px`;
    myBarChart.canvas.parentNode.style.width = `${width}px`;

    let electricity = document.getElementById('pulse_value');
    electricity.innerHTML = consumption
}
