'use strict';

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
    $scope.title = "Список телефонов"
    $scope.phones = [{
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.',
            status: true,
            priority: 1
        },
        {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.',
            status: false,
            priority: 2
        },
        {
            name: 'Motorola XOOM™',
            snippet: 'Fast just got faster with Nexus S.',
            status: true,
            priority: 3
        },
    ];
    $scope.today = new Date();
    $scope.doneAndFilter = function(phoneItem) {
        return phoneItem.name && phoneItem.priority > 1 && phoneItem.status === true;
    }
    $scope.sortField = undefined;
    $scope.reverse = false;
    $scope.sort = function(fieldName) {
        $scope.sortField = fieldName;
        if ($scope.reverse === false) {
            $scope.reverse = !$scope.reverse;
        } else {
            $scope.reverse = false;
        }
    };
    $scope.isSortUp = function(fieldName) {
        return $scope.sortField === fieldName && !$scope.reverse;
    }
    $scope.isSortDown = function(fieldName) {
        return $scope.sortField === fieldName && $scope.reverse;
    }
});