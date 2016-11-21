'use strict';

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
    $scope.title = "Список телефонов"
    $http.get('others/phones.json').success(function(data, status, headers, config) {
            console.log('This is Data:', data, '\n\n This is Status', status, '\n\n This is Headers:', headers, '\n\nThis is Config:', config)
            $scope.phones = data;
        })
        .error(function() {});

    /*
    $http.get(url, [config]);
    $http.post(url, data, [config]);
    $http.put(url, data, [config]);
    $http.patch(url, data, [config]);
    $http.delete(url, [config]);
    $http.head(url, [config]);
    $http.jsonp(url, [config]);    
    */

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