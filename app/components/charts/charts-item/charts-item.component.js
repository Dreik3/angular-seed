angular
    .module('ntCharts.charts-item', []);

angular
    .module('ntCharts.charts-item').component('chartsItem', {
    templateUrl: 'components/charts/charts-item/charts-item.tmpl.html',
    controller: ChartsItemController,
    //СПРОСИ У ЕГОРА ЧТО ЭТО ЗА ХНЯ И КАК ЕЕ ИСПОЛЬЗОВАТЬ
    resolve: {
        chart:'>'
    }
});

function ChartsItemController($scope, storageForData/*$element, $attrs*/) {
    $scope.chartConfig = storageForData.model.chartConfig;
    console.log("test", $scope.chartConfig);

}



