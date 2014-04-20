'use strict';

angular.module('employeesJsApp')
    .constant('baseUrl', '/employees-manager/api/rest/')
    .controller('ShowCtrl', ['$scope', 'searchService', 'baseUrl', function ($scope, searchService, baseUrl) {

        $scope.employees = [];
        $scope.noDataFoundMessage=undefined;
        $scope.noLinkFoundMessage=undefined;

        $scope.employees_ = [
            {name:'laura'},
            {name:'andreas'},
            {name:'salva'}
        ];

        $scope.getAllEmployees = function (){
            searchService.getEmployeesList()

                .success(function(data) {

                    if (data.success !== false) {
                        $scope.noDataFoundMessage=undefined;
                        $scope.employees = data;
                    }
                    else {
                        $scope.noDataFoundMessage=data.message;


                    }
                })
                        .error(function(data) {

                    $scope.noLinkFoundMessage=data.message;
                        });


    }}])

.service('searchService', ['$http', 'baseUrl', function ($http, baseUrl) {
    this.getEmployeesList = function() {
        return $http.get(baseUrl +'all') ;
    };
}]);

/*
{"name" : { "first" : "Mike", "last" : "Patton" }, "street" : "Sunset Boulevard 55", "age" : 53, "phone" : "555 123237", "skills" : [ "C++", "PHP", "jquery" ] }
*/

