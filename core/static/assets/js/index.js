document.addEventListener("DOMContentLoaded", function() {
    const totalViewChart = document.getElementById('total-views-chart').getContext('2d');
    const revenueChart = document.getElementById('revenue-chart').getContext('2d');
    const subscriberCountChart = document.getElementById('subscriber-count').getContext('2d');
    const trafficSourcesElement = document.getElementById('traffic-sources').getContext('2d');
    // const dataTtable = document.getElementById('datatable').getContext('2d');
    new Chart(totalViewChart, {
        type: 'line',
        data: {
            labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
            datasets: [
                {
                    label: 'Total Users',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(revenueChart, {
        type: 'line',
        data: {
            labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
            datasets: [
                {
                    label: 'Total Users',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(subscriberCountChart, {
        type: 'line',
        data: {
            labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
            datasets: [
                {
                    label: 'Total Users',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(trafficSourcesElement, {
        type: 'pie',
        data: {
            labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
            datasets: [
                {
                    label: 'Total Users',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const dataTable = new simpleDatatables.DataTable("#datatable", {
        searchable: true,
        fixedHeight: true,
        data: {
            headings: ["Video title", "Published Date", "Views Count"],
        }
    });

    dataTable.insert(
        { data:
            [
                ['Top 10 VS code Shortcuts', "15-11-2012", "23415"], 
                ['Top 10 VS code Shortcuts', "15-11-2012", "23413"],
                ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
                ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
                ['Top 10 VS code Shortcuts', "15-11-2012", "23415"], 
                ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
                ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
                ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
                ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
                ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
                ['Top 10 VS code Shortcuts', "15-11-2012", "23415"],
          ]
        }
    )
   
});