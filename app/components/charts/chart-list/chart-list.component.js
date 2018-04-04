angular
    .module('ntCharts.chart-list', []);

angular
    .module('ntCharts.chart-list').component('chartList', {
    templateUrl: 'components/charts/chart-list/chart-list.tmpl.html',
    controller: ChartsListController,
});

function ChartsListController($scope, storageForData) {
    $scope.chartConfig = storageForData.getData();

}
