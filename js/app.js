function renderLineChart() {
    let ctx = document.getElementById("km-months");
    // show line chart with amount of kilometers travelled in a month
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
              label: 'Amount KM traveled per month',
              data: [30000, 600000, 8000000, 11000000, 5534536, 534535, 4345345],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
            }]
        }
    })
}

function renderBarChart() {
    let ctx = document.getElementById("atmosphere-chart");
    
    // show bar chart with the percentage atmosphere composition
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Nitrogen (N2)', 'Oxygen (o2)', 'Argon (Ar)', 'Carbon dioxide (Co2)'],
            datasets: [{
                label: 'Percentage Atmosphere composition',
                data: [70, 20, 5, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })
}

function renderDonutChart() {
    let ctx = document.getElementById("food-chart");
    
    // show pie chart percentage food and water supply
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [
              'Food',
              'Water',
            ],
            datasets: [{
              label: 'Percentage Food & water supply',
              data: [71, 29],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              hoverOffset: 4
            }]
        }
    })
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function renderStats() {
    let fuelStat = document.getElementById("fuel-stat");
    let speedStat = document.getElementById("speed-stat");
    let accStat = document.getElementById("acceleration-stat");
    let gForceStat = document.getElementById("gForce-stat");

    let fuel = 100;
    let speed = 0;
    let maxSpeed = 78850;
    let acc = 0;
    let maxAcc = 53;
    let gForce = ["3g", "4g", "5g"];

    fuelStat.innerHTML = fuel;
    speedStat.innerHTML = speed;
    accStat.innerHTML = acc;
    gForceStat.innerHTML = gForce[Math.floor(Math.random() * gForce.length)];


    // show fuel every 10 seconds
    // will remove 1 to 3 fuel points from 100%
    setInterval(function() {
        fuel = fuel - randomNumber(1, 3);
        fuelStat.innerHTML = fuel.toFixed();
    }, 10000)

    // randomly show g force statistics every 5 seconds 
    setInterval(function() {
        gForceStat.innerHTML = gForce[Math.floor(Math.random() * gForce.length)];
    }, 5000)

    // increment speed every 300 milliseconds by 340 to 573
    let speedInterval = setInterval(function() {
        speed += randomNumber(340, 573);
        speedStat.innerHTML = speed.toFixed(2);
        if (speed >= maxSpeed) {
            clearInterval(speedInterval)
        } 
    }, 300)

    // increment acceleration every 1 second by 1 to 5
    let accInterval = setInterval(function() {
        acc += randomNumber(1, 5);
        accStat.innerHTML = acc.toFixed(2);
        if (acc >= maxAcc) {
            clearInterval(accInterval)
        } 
    }, 1000)

}


function app() {
    renderLineChart();
    renderBarChart();
    renderDonutChart();
    renderStats();
}

app();