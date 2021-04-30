//Load google charts
google.charts.load('current', { 'packages': ['corechart'] }); //Loadng chart packages.
google.charts.setOnLoadCallback(drawChart); //Calling finctuon to draw chart on load.
//Draw the chart and set the chart values
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'], //Tasks done during avg. day. Hrs. done per avg. day.
        ['Sleeping', 9], //'Sleeping' for 9 hrs.
        ['Eating', 0.5], //'Eating' for .5 hrs.
        ['Entertainment', 12], //'Entertainment' for 12 hrs.
        ['Coding', 0.5], //'Coding' for .5 hrs.
        ['Sports', 2] //'Sports' for 2 hr.
    ]);
    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'My Average Day', 'width': 1000, 'height': 900, }; //'My Avg. Day' title with 1000 px. wide and 900 px. long.
    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart')); //Displaying the chart under 'piechart' ID.
    chart.draw(data, options); //Drawing 'data' with tasks and hrs. with 'options'.
}