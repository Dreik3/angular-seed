angular
    .module('ntCharts.charts-item', []);

angular
    .module('ntCharts.charts-item').component('chartsItem', {
    templateUrl: 'components/charts/charts-item/charts-item.tmpl.html',
    controller: ChartsItemController,
    resolve: {
        chart:'>'
    }
});

function ChartsItemController($scope, $element, $attrs) {
    let ctrl = this;
    $scope.chartConfig = {
        chart1: {
            chart: {
                type: 'bar'
            },
            series: [{
                data: [10, 15, 12, 8, 7],
                id: 'series1'
            }],
            title: {
                text: 'chart1'
            }
        },
        chart2: {
            chart: {
                 type: 'bar'
            },
            series: [{
                 data: [15, 3, 2, 12, 12],
                 id: 'series2'
            }],
            title: {
                text: 'chart2'
            }
        },
        chart3: {
            chart: {
                type: 'bar'
            },
            series: [{
                data: [2, 5, 12, 18, 17],
                id: 'series3'
            }],
            title: {
                text: 'chart3'
            }
        },
        chart4: {
            chart: {
                 type: 'bar'
            },
            series: [{
                 data: [15, 13, 21, 12, 22],
                 id: 'series4'
            }],
            title: {
                text: 'chart4'
            }
        }
    }
}



