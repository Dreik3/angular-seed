'use strict';

// Declare app level module which depends on views, and components
let myApp = angular.module('myApp',  ["highcharts-ng","ntCharts"]);

myApp.controller('optBoxCtrl', function($scope, storageForData) {
    $scope.isBoxOpen = false;
    //get random arrays for charts data - will be changed for some public api data later
    let getRndDataArr = function() {
        let rndDataArr = [];
        for (let i = 0; i < 5; i++) {
            rndDataArr[i] = Math.floor((Math.random() * 100) + 1);
        }
        return rndDataArr;
    };
    let chartConfig = {
        chart1: {
            chart: {
                type: 'bar'
            },
            series: [{
                data: getRndDataArr(),
                id: 'series1'
            }],
            title: {
                text: 'chart1'
            },
            value: true/*,
            color: "#4088ED"*/
        },
        chart2: {
            chart: {
                type: 'bar'
            },
            series: [{
                data: getRndDataArr(),
                id: 'series2'
            }],
            title: {
                text: 'chart2'
            },
            value: true/*,
            color: "#4088ED"*/
        },
        chart3: {
            chart: {
                type: 'bar'
            },
            series: [{
                data: getRndDataArr(),
                id: 'series3'
            }],
            title: {
                text: 'chart3'
            },
            value: true/*,
            color: "#4088ED"*/
        },
        chart4: {
            chart: {
                type: 'bar'
            },
            series: [{
                data: getRndDataArr(),
                id: 'series4'
            }],
            title: {
                text: 'chart4'
            },
            value: true/*,
            color: "#4088ED"*/
        }
    };
    console.log(chartConfig.chart1.value, chartConfig.length);
    let chartConfigEdit = {};
    let chartsNumber = 4;
    //updating our chartConfig object, we shouldnt show charts if checkbox on them is false
    for (let i = 0; i < chartsNumber; i++) {
        if (chartConfig.chart1.value) {
            chartConfigEdit.chart1 = chartConfig.chart1;
        }
        if (chartConfig.chart2.value) {
            chartConfigEdit.chart2 = chartConfig.chart2;
        }
        if (chartConfig.chart3.value) {
            chartConfigEdit.chart3 = chartConfig.chart3;
        }
        if (chartConfig.chart4.value) {
            chartConfigEdit.chart4 = chartConfig.chart4;
        }
    }
    storageForData.getData(chartConfigEdit);
});
//factory used for sharing data from optBoxCtrl to chart-item component
myApp.factory('storageForData', function(){
    let model = {};
    return {
        model,
        getData: function (chartConfig) {
            model.chartConfig = chartConfig;
        }
    }

});