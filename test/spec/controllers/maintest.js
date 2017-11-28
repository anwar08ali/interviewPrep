'use strict';

describe('Controller: MaintestctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('myInterviewAppApp'));

  var MaintestctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MaintestctrlCtrl = $controller('MaintestctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MaintestctrlCtrl.awesomeThings.length).toBe(3);
	console.log("ina");
  });
});
