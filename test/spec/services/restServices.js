/**
 * Created by nicky on 6/3/15.
 */

'use strict';

describe("Concept Service Unit Tests", function() {

  var baseURl = 'https://test1.ampath.or.ke:8443/amrs/ws/rest/v1/';

  var mockConcepts = {results:[{display:"concept1"},{display:"concept2"}]};

  var httpBackend, conceptsService;

  beforeEach(function() {
    //Ensure angular modules available
    //module('mytodoApp');
    module('restServices');

  });

  beforeEach(inject(function ($injector) {
    httpBackend = $injector.get('$httpBackend');
    conceptsService = $injector.get('Concepts');
  }));


  it('should have Concepts service be defined', function () {
    expect(conceptsService).toBeDefined();
  });

  it('should return data / JSON', function(){
    httpBackend.expectGET(urlBase+ 'concept?limit=5').respond(mockConcepts);

    var myData = null;

    conceptsService.getConcepts().get({}, function (data) {
      myData = data.results;
    });

    httpBackend.flush();

    expect(myData).toEqual(mockConcepts.results);
  });

});
