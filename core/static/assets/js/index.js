document.addEventListener("DOMContentLoaded", function() {
    const totalViewChart = document.getElementById('total-views-chart').getContext('2d');
    const revenueChart = document.getElementById('revenue-chart').getContext('2d');
    const subscriberCountChart = document.getElementById('subscriber-count').getContext('2d');
    const trafficSourcesElement = document.getElementById('traffic-sources').getContext('2d');

    fetch('/api/total-views/')
        .then(res => res.json())
        .then(data => {
            new Chart(totalViewChart, {
                type: 'line',
                data: {
                    labels: data.labels,
                    datasets: [
                        {
                            label: 'Total Users',
                            data: data.data,
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
        })
        .catch(error => console.error('Error fetching total views data:', error));

    // Static data for other charts
    const staticLabels = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
    const staticData = [65, 59, 80, 81, 56, 55, 40];

    new Chart(revenueChart, {
        type: 'line',
        data: {
            labels: staticLabels,
            datasets: [
                {
                    label: 'Total Users',
                    data: staticData,
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
            labels: staticLabels,
            datasets: [
                {
                    label: 'Total Users',
                    data: staticData,
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
            labels: staticLabels,
            datasets: [
                {
                    label: 'Total Users',
                    data: staticData,
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

    // Initialize DataTable
    const dataTable = new simpleDatatables.DataTable("#datatable", {
        searchable: true,
        fixedHeight: true,
        data: {
            headings: ["Video title", "Published Date", "Views Count"],
        }
    });

    // Fetch data for DataTable
    fetch('/api/datatable-api/')
        .then(res => res.json())
        .then(data => {
            console.log('Fetched Data:', data);  // Log fetched data to check structure
            dataTable.rows().add(data.data);
        })
        .catch(error => console.error('Error fetching DataTable data:', error));
});
