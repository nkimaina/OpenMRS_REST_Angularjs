'use strict';

describe('Controller: patientsListCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var patientListCtrl,
    scope, httpBackend;

  var baseURl = 'https://test1.ampath.or.ke:8443/amrs/ws/rest/v1/';

  var mockConcepts = {results:[{display:"concept1"},{display:"concept2"}]};

  // Initialize the controller and a mock scope and a mock http
  beforeEach(inject(function ($controller, $rootScope, Concepts, $httpBackend) {
    httpBackend = $httpBackend;
    scope = $rootScope.$new();
    patientListCtrl = $controller('patientsListCtrl', {
      $scope: scope, Concepts: Concepts
    });

    //set up mock data

    var url = baseURl + 'concept?limit=5';

    httpBackend.whenGET(url).respond(mockConcepts);

  }));

  //test
  it('should initialize the set of concepts in the scope', function () {
    expect(scope.concepts.length).toBe(0);
  });

    //test
  it('should clear the list of concepts in the scope on load', function () {
      scope.concepts = [{display:"concept1"},{display:"concept2"}];
      scope.clearConcepts();
      expect(scope.concepts.length).toBe(0);
  });

    //test
  it('should set the concepts returned to the controller by the Concepts service list in the concept scope variable', function () {
    scope.getConcepts();
    httpBackend.flush();
    expect(scope.concepts).toEqual(mockConcepts.results);
    expect(scope.concepts.length).toBe(2);
  });


});
