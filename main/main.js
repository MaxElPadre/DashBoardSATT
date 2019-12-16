document.addEventListener("DOMContentLoaded", () => {
    let radarChart = document.getElementById("radarChart");
    initChartRadar(radarChart);

    let barCanvar = document.getElementById("barChart");
    initBarChart(barCanvar);
});

function initBarChart(barCanvar) {
    let data = {
        labels: ["2020", "2021", "2022", "2023", "TOTAL"],
        datasets: [{
            label: "Objective",
            backgroundColor: "#494e89",
            data: [3.65, 2.57, 2.43, 3.02, 6.54],
            roundedBar: 50
        }, {
            label: "Expected",
            backgroundColor: "#4f57bb",
            data: [2.87, 1.81, 1.78, 2.67, 5.70]
        }, {
            label: "Obtained",
            backgroundColor: "#6873ff",
            data: [1.98, 1.24, 1.55, 2.35, 3.62]
        }]
    };

    let myBarChart = new Chart(barCanvar, {
        type: 'bar',
        data: data,
        options: {
            scaleShowLabels: false,
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        display: false
                    },
                    gridLines: {
                        display: false
                    }
                }],
                xAxes: [{
                    ticks: {
                        min: 0,
                    },
                    gridLines: {
                        display: false
                    },
                    categoryPercentage: 0.5,
                    barPercentage: 0.2
                }]
            }
        }
    });
}

function initChartRadar(marksCanvas) {
    let marksData = {
        labels: ["Leadership", "Roadmap", "Infrastructure", "Workforce", "Strategic Value", "Personal drive"],
        datasets: [{
            backgroundColor: "transparent",
            borderColor: "#e6be7a",
            fill: false,
            radius: 6,
            pointRadius: 4,
            pointBorderWidth: 1,
            pointBackgroundColor: ["#c20a0a", "#c20a0a", "#f79d5e", "#c20a0a", "#2fc0a3", "#f79d5e"],
            pointBorderColor: ["#c20a0a", "#c20a0a", "#f79d5e", "#c20a0a", "#2fc0a3", "#f79d5e"],
            pointHoverRadius: 8,
            data: [65, 75, 70, 80, 60, 80]
        }]
    };

    let chartOptions = {
        scale: {
            ticks: {
                beginAtZero: true,
                min: 0,
                max: 100,
                stepSize: 20
            },
            pointLabels: {
                fontSize: 10,
                fontColor: ["#c20a0a", "#c20a0a", "#f79d5e", "#c20a0a", "#2fc0a3", "#f79d5e"]
            }
        },
        legend: {
            display: false,

        }
    };

    new Chart(marksCanvas, {
        type: 'radar',
        data: marksData,
        options: chartOptions
    });
}