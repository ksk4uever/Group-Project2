google.charts.load('current', {
  'packages':['geochart'],
 
  'mapsApiKey': 'AIzaSyA3NbxDzYxAAUQZfkUHlDn_0ID52d0tJXU'
});

google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {

    $.get("country_wines.csv", function(dataset) {
        // transform the CSV string into a 2-dimensional array
        var arrayData = $.csv.toArrays(dataset, {onParseValue: $.csv.hooks.castToScalar});
  
        // this new DataTable object holds all the data
        var data = new google.visualization.arrayToDataTable(arrayData);

        console.log(dataset);

  var options = {colorAxis: {colors: ["maroon"]}
  };

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
});
google.setOnLoadCallback(drawRegionsMap)
}