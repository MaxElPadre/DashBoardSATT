document.addEventListener("DOMContentLoaded", () => {
    let radarChart = document.getElementById("radarChart");
    initChartRadar(radarChart);
});

function initChartRadar(marksCanvas) {
    let marksData = {
        labels: ["Leadership", "Roadmap", "Infrastructure", "Workforce", "Strategic Value", "Personal drive"],
        datasets: [{
            backgroundColor: "transparent",
            borderColor: "rgba(200,0,0,0.6)",
            fill: false,
            radius: 6,
            pointRadius: 6,
            pointBorderWidth: 3,
            pointBackgroundColor: "orange",
            pointBorderColor: "rgba(200,0,0,0.6)",
            pointHoverRadius: 10,
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
                fontSize: 10
            }
        },
        legend: {
            display: false
        }
    };

    new Chart(marksCanvas, {
        type: 'radar',
        data: marksData,
        options: chartOptions
    });
}