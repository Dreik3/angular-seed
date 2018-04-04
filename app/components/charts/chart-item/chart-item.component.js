angular
    .module('ntCharts.chart-item', []);

angular
    .module('ntCharts.chart-item').component('chartItem', {
    templateUrl: 'components/charts/chart-item/chart-item.tmpl.html',
    controller: ChartsItemController,
    resolve: {
        chart:'>'
    }
});

function ChartsItemController($scope, storageForData/*$element, $attrs*/) {
    $scope.chartConfig = storageForData.getData();

}