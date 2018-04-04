'use strict';

// Declare app level module which depends on views, and components
let myApp = angular.module('myApp', ["highcharts-ng", "ntCharts"]);

myApp.controller('optBoxCtrl', function ($scope, storageForData) {
    $scope.isBoxOpen = false;
    storageForData.initCharts(4);

    $scope.chartType = '';
    $scope.colors = ['#FF0000', '#1900FF', '#11FF00'];
    $scope.timeToStart ='';

    $scope.chartConfig = storageForData.getData();
    //convert time which user chosed as starting point to milliseconds
    $scope.parseTime = function(value) {
        $scope.timeToStart = Date.parse($scope.timeToStart);
        console.log("test", $scope.timeToStart);
        console.log("test", $scope.chartConfig[0].series[0].pointStart);
        $scope.changeType();
    };

    //after changing value of the radio checkboxes, color or start date, change the type of all charts to bar/line(color or start date)
    $scope.changeType = function () {
        for (let i = 0; i < $scope.chartConfig.length; i++) {
            $scope.chartConfig[i].chart.type = $scope.chartType;
            $scope.chartConfig[i].colors = $scope.colors;
            $scope.chartConfig[i].series[0].pointStart = $scope.timeToStart;
        }
    }
    console.log($scope.chartConfig);
});
//get random arrays for charts data - will be changed for some public api data later
function getRndDataArr() {
    let rndDataArr = [];
    for (let i = 0; i < 15; i++) {
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
    this.xAxis = {
        type: 'datetime',
        dateTimeLabelFormats: {day: '%e of %b'}};
    this.colors = ['#FF0000', '#1900FF', '#11FF00'];
    this.series = [{
            data: getRndDataArr(),
            pointStart: Math.round((new Date().getTime() / 1000) - (7 * 24 * 3600)) * 1000, //start week ago
            pointInterval: 24 * 3600 * 1000, // one day
            name: `series1`
      /*  }, {
            data: getRndDataArr(),
            name: `series2`
        }, {
            data: getRndDataArr(),
            name: `series3`*/
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