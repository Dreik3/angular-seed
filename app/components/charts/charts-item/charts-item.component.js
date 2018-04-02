angular
    .module('ntCharts.charts-item', []);

angular
    .module('ntCharts.charts-item').component('chartsItem', {
    templateUrl: 'components/charts/charts-item/charts-item.tmpl.html',
    controller: ChartsItemController,
    resolve {
        chart:'>'
    }
});


debugger;

function ChartsItemController($scope, $element, $attrs) {
    let ctrl = this;
    $scope.chartConfig =  {
        chart: {
            type: 'bar'
        },
        series: [{
            data: [10, 15, 12, 8, 7],
            id: 'series1'
        }],
        title: {
            text: 'Hello'
        }
    }

}



