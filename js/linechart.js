document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('lineChart').getContext('2d');
    var lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Dataset 1',
                data: [65, -59, 80, 81, -56, 55, -40],
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }, {
                label: 'Dataset 2',
                data: [28, 48, -40, 19, 86, 27, 90],
                fill: false,
                borderColor: 'rgb(54, 162, 235)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true
                },
                title: {
                    display: true,
                    text: 'Chart.js Line Chart'
                }
            }
        }
    });
});