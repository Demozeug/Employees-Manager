'use strict';


'use strict';
describe('Service:show.js', function () {

    // load the controller's module and provide mock
    beforeEach(module('employeesJsApp'));

    it('should exist', inject(function (searchService) {
        expect(searchService).toBeDefined();
    }));

    it('should have a function', inject(function (searchService) {
        expect(searchService.getEmployeesList).toBeDefined();
    }));

});

/*describe('Controller: FrontendCtrl', function () {


//   updateReportList

    it('should return a report list for valid customerName', function () {

        var names = [
            {name: 'Pawel'},
            {name: 'Peter'},
            {name: 'Peter2'}
        ];

        var customerName = 'trier';

        $httpBackend.whenGET('/mc-catalogue-mapper/api/reports/' + customerName + '/dates').
            respond(names);

        //invoke code under test
        scope.updateReportList(customerName);
        //simulate response
        $httpBackend.flush();
        //verify results
        expect(scope.reportListFailure).toBeUndefined();
        expect(scope.reportDates.length).toEqual(names.length);
        expect(scope.customerReportName).toEqual(customerName);

    });

    it('shouldn´t return a empty list for invalid customer name', function () {

        var customerName = 'triesjlskdfgslgkfr';

        $httpBackend.whenGET('/mc-catalogue-mapper/api/reports/' + customerName + '/dates')
            .respond('{"success":false,"relogin":false,"message":"No customer found for the provided name"}');

        //invoke code under test
        scope.updateReportList(customerName);
        //simulate response
        $httpBackend.flush();
        //verify results
        expect(scope.reportDates).toBeUndefined;
        expect(scope.customerReportName).toEqual(customerName);
        expect(scope.reportListFailure).toMatch('No customer found for the provided name');

    });

    it('should report List Failure on http request error', function () {

        var customerName = 'triesjlskdfgslgkfr';
        var errorMessage='error from server';

        var names = [
            {name: 'Pawel'},
            {name: 'Peter'},
            {name: 'Peter2'}
        ];

        $httpBackend.whenGET('/mc-catalogue-mapper/api/reports/' + customerName + '/dates')
            .respond(500,errorMessage);

        //invoke code under test
        scope.updateReportList(customerName);
        //simulate response
        $httpBackend.flush();
        //verify results
        expect(scope.reportDates).toBeUndefined;
        expect(scope.customerReportName).toEqual(customerName);
        expect(scope.reportListFailure).toMatch(errorMessage);


    });

});*/
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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShowCtrl).toBeDefined();
  });

    it('should return a list of all employees', function () {

        var employees= [

            {"name" : { "first" : "Mike", "last" : "Patton" }, "street" : "Sunset Boulevard 55", "age" : 53, "phone" : "555 123237", "skills" : [ "C++", "PHP", "jquery" ] },
            {"name" : { "first" : "John", "last" : "Jenkins" }, "street" : "Sunset Boulevard 55", "age" : 53, "phone" : "555 123237", "skills" : [ "C++", "PHP", "jquery" ] }
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

});
