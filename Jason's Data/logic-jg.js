google.charts.load('current', {
    'packages':['geochart'],
   
    'mapsApiKey': 'AIzaSyA3NbxDzYxAAUQZfkUHlDn_0ID52d0tJXU'
  });

  d3.csv("country_wines.csv", function(dataset) {
      // dataset.forEach(function(data) {
          // data.country = +data.country;
          // data.totals = +data.totals;
        console.log(dataset);
        
  });
  // });   

  google.charts.setOnLoadCallback(drawRegionsMap);
 
  function drawRegionsMap() {
 
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
      // for (i = 0, len = data.country)
    ]);
 
    var options = {colorAxis: {colors: ["maroon"]}
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  };
