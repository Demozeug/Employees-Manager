'use strict';

describe('Service:showSpec.js', function () {

    // load the controller's module and provide mock
    beforeEach(module('employeesJsApp'));

    it('should exist', inject(function (searchService) {
        expect(searchService).toBeDefined();
    }));

    it('should have a function', inject(function (searchService) {
        expect(searchService.getEmployeesList).toBeDefined();
    }));

});

describe('Controller: ShowCtrl', function () {

    // load the controller's module
    beforeEach(module('employeesJsApp'));

    var ShowCtrl, scope, http, httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ShowCtrl = $controller('ShowCtrl', {
            $scope: scope
        });
    }));

    beforeEach(inject(function ($http, $httpBackend) {
        http = $http;
        httpBackend = $httpBackend;
    }));

    it('should be defined', function () {
        expect(ShowCtrl).toBeDefined();
    });

    it('should return a list of all employees', function () {

        var employees = [

            {"name": { "first": "Mike", "last": "Patton" }, "street": "Sunset Boulevard 55", "age": 53, "phone": "555 123237", "skills": [ "C++", "PHP", "jquery" ] },
            {"name": { "first": "John", "last": "Jenkins" }, "street": "Sunset Boulevard 55", "age": 53, "phone": "555 123237", "skills": [ "C++", "PHP", "jquery" ] }
        ];

        httpBackend.whenGET('/employees-manager/api/rest/all').
            respond(employees);

        //invoke code under test
        scope.getAllEmployees();
        //simulate response
        httpBackend.flush();
        //verify results

        expect(scope.employees.length).toEqual(employees.length);

    });


    it('shouldn´t find data for the provided url',  function () {

        var message = 'No data found for the provided url';
        var jsonMessage = {"success": false, "message": "No data found for the provided url"};

        httpBackend.whenGET('/employees-manager/api/rest/all')
            .respond(jsonMessage);

        //invoke code under test
        scope.getAllEmployees();
        //simulate response
        httpBackend.flush();
        //verify results

        expect(scope.noDataFoundMessage).toMatch(message);

    });

    it('should not find the resource', function () {

        var errorMessage = 'resource not found';
        var jsonMessage = {"success": false, "message": "resource not found"};

        httpBackend.whenGET('/employees-manager/api/rest/all')
            .respond(404, jsonMessage);

        //invoke code under test
        scope.getAllEmployees();
        //simulate response
        httpBackend.flush();

        //verify results

        expect(scope.noLinkFoundMessage).toMatch(errorMessage);

    });

});
