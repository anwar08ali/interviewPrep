'use strict';

describe('Controller: InterviewprepCtrl', function () {

  // load the controller's module
  beforeEach(module('myInterviewAppApp'));

  var InterviewprepCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InterviewprepCtrl = $controller('InterviewprepCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.testArr.length).toBe(1);
  });
});
