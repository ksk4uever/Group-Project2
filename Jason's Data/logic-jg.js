  // start clean code (Google example)
  google.charts.load('current', {
    'packages':['geochart'],
   
    'mapsApiKey': 'AIzaSyA3NbxDzYxAAUQZfkUHlDn_0ID52d0tJXU'
  });
   

  google.charts.setOnLoadCallback(drawRegionsMap);
 
  function drawRegionsMap() {
 
    var data = google.visualization.arrayToDataTable([
      ["country","totals"],
      // ["US-France",1],
      ["US",62397],
      ["Spain",8268],
      ["France",21098],
      ["Italy",23478],
      ["New Zealand",3320],
      ["Bulgaria",77],
      ["Argentina",5631],
      ["Australia",4957],
      ["Portugal",5322],
      ["Israel",630],
      ["South Africa",2258],
      ["Greece",884],
      ["Chile",5816],
      ["Morocco",12],
      ["Romania",139],
      ["Germany",2452],
      ["Canada",196],
      ["Moldova",71],
      ["Hungary",231],
      ["Austria",3057],
      ["Croatia",89],
      ["Slovenia",94],
      ["India",8],
      ["Turkey",52],
      ["Macedonia",16],
      ["Lebanon",37],
      ["Serbia",14],
      ["Uruguay",92],
      ["Switzerland",4],
      ["Albania",2],
      ["Bosnia and Herzegovina",4],
      ["Brazil",25],
      ["Cyprus",31],
      ["Lithuania",8],
      ["Japan",2],
      ["China",3],
      ["South Korea",4],
      ["Ukraine",5],
      ["England",9],
      ["Mexico",63],
      ["Georgia",43],
      ["Montenegro",2],
      ["Luxembourg",9],
      ["Slovakia",3],
      ["Czech Republic",6],
      ["Egypt",3],
      ["Tunisia",2]
      // for (i = 0, len = data.country)
    ]);
 
    var options = {colorAxis: {colors: ["BLUE"]}
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  };

  // End functioning code

// Start passing csv using d3 and logging
  d3.csv("country_wines.csv", function(dataset) {
    // dataset.forEach(function(data) {
        // data.country = +data.country;
        // data.totals = +data.totals;
      console.log(dataset);
      
});
// });

// end d3 csv passing example

// Start jquery example for visualizing and passing csv in the same function

// function drawRegionsMap() {
//    $.get("country_wines.csv", function(csvString) {
//       // transform the CSV string into a 2-dimensional array
//       var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});
//       // this new DataTable object holds all the data
//       var data = new google.visualization.arrayToDataTable(arrayData);
//    });
//   };

// end jquery csv example