'use strict';

// Declare app level module which depends on views, and components
let myApp = angular.module('myApp', ["highcharts-ng", "ntCharts"]);

myApp.controller('optBoxCtrl', function ($scope, storageForData) {
    $scope.isBoxOpen = false;
    storageForData.initCharts(4);

    $scope.chartType = '';
    $scope.colors = ['#FF0000', '#1900FF', '#11FF00'];
    $scope.foo = function (color) {
        console.log($scope.colors);
    };
    $scope.chartConfig = storageForData.getData();
    //after changing value of the radio checkboxes, change the type of all charts to bar/line
    $scope.changeType = function () {
        for (let i = 0; i < $scope.chartConfig.length - 1; i++) {
            $scope.chartConfig[i].chart.type = $scope.chartType;
            $scope.chartConfig[i].colors = $scope.colors;
        }
    }
/*    console.log($scope.chartConfig);*/
});
//get random arrays for charts data - will be changed for some public api data later
function getRndDataArr() {
    let rndDataArr = [];
    for (let i = 0; i < 5; i++) {
        rndDataArr[i] = Math.floor((Math.random() * 100) + 1);
    }
    return rndDataArr;
}

function ChartConfig(id,type,title,visible=true) {
    this.chart = {
        type: type,
        name: title,
    };
    this.id = id;
    this.visible = visible;
    this.title = {text: title};
    this.colors = ['#FF0000', '#1900FF', '#11FF00'];
    this.series = [{
            data: getRndDataArr(),
            name: `series1`
        }, {
            data: getRndDataArr(),
            name: `series2`
        }, {
            data: getRndDataArr(),
            name: `series3`
        }
    ];
}
//factory used for sharing data from optBoxCtrl to chart-list component
myApp.factory('storageForData', function () {
    const chartConfig =[];

    return {
        initCharts: function(n) {
            for (let  i = 0; i < n; i++){
                chartConfig.push(
                    new ChartConfig(i,'line',`chart${i+1}`)
                )
            }
        },
        getData: function () {
            return chartConfig;

        }
    }

});