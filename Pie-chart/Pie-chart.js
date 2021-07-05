google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Sleeping', 9],
        ['Eating', 0.5],
        ['Entertainment', 12],
        ['Coding', 0.5],
        ['Sports', 2]
    ]);
    var options = { 'title': 'My Average Day', 'width': 1000, 'height': 900 };
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}
