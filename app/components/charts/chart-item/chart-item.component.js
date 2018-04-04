angular
    .module('ntCharts.chart-item', []);

angular
    .module('ntCharts.chart-item').component('chartItem', {
    templateUrl: 'components/charts/chart-item/chart-item.tmpl.html',
    controller: ChartsItemController,
    bindings: {
        chart:'='
    }
});

function ChartsItemController($scope, storageForData/*$element, $attrs*/) {
    let ctrl =this;
    debugger;
    console.log('HEY3');
    console.log(ctrl.chart);

}