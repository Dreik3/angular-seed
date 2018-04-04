angular
    .module('ntCharts.chart-list', []);

angular
    .module('ntCharts.chart-list').component('chartList', {
    templateUrl: 'components/charts/chart-list/chart-list.tmpl.html',
    controller: ChartsListController,
    resolve: {
        chart:'<'
    }
});

function ChartsListController($scope, storageForData) {
    $scope.chart = storageForData.getData();
    console.log($scope.chart);
}
