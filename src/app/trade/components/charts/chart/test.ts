(async () => {

    const data = await fetch(
        'https://demo-live-data.highcharts.com/aapl-ohlc.json'
    ).then(response => response.json());


    // create the chart
    Highcharts.stockChart('container', {
        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'AAPL Stock Price'
        },

        series: [{
            type: 'candlestick',
            name: 'AAPL Stock Price',
            data: data,
            dataGrouping: {
                units: [
                    [
                        'week', // unit name
                        [1] // allowed multiples
                    ], [
                        'month',
                        [1, 2, 3, 4, 6]
                    ]
                ]
            }
        }]
    });
})();





// Create the chart
chart= Highcharts.chart('container', {
    chart: {
        type: 'pie',
        events: {
          //load: function () { console.log(this) },
        	drilldown: function() {
          
          			console.log(chart.btnCount)
          
          			if (this.series[0].options._levelNumber != 1 ) {
                /* hide thirdbutton  */
                }

								chart.redraw();
           },
          drillup: function(u) {
          			console.log(chart.btnCount)
          			if (this.series[0].options._levelNumber == 1 ) {
                /* show thirdbutton  */
                }
                chart.redraw();
          }
        }
    },
    title: {
        text: 'Drilldown label styling'
    },
    xAxis: {
        type: 'category'
    },
	exporting: {
     		buttons: {
            contextButton: {
              enabled: false
            },

            firstButton: {
              text: 'Download',
               menuItems: [
                'downloadCSV'
                ]
            },

           secondButton: {
              text: 'Table',
              onclick: function () {
                this.viewData();
              }
          },
				 
          thirdButton:{
              text:'Hide-at-drilldown',
              menuItems: [
                'downloadXLS'
                ]
				},
       }
    },
   
   
    legend: {
        enabled: false
    },

    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true
            }
        }
    },

    series: [{
        name: 'Things',
        colorByPoint: true,
        data: [{
            name: 'Dieren',
            y: 5,
            drilldown: 'animals'
        }, {
            name: 'Fruit',
            y: 3,
            drilldown: 'fruits'
        }]
    }],
    drilldown: {
       
        series: [{
            id: 'animals',
            data: [
                ['Katten', 4],
                ['Honden', 2],
                ['Koeien', 1],
                ['Schapen', 2],
                ['Varkens', 1]
            ]
        }, {
            id: 'fruits',
            data: [
                ['Appels', 4],
                ['Sinaasappels', 2]
            ]
        }]
    }
});