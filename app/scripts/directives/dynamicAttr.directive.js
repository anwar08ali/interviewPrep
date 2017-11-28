angular.module('myInterviewAppApp')
  .directive("dynamicAttr",function(){
	  var res = {};
	  res.restrict = 'E';
	  res.transclude = true;
	  res.templateUrl = "scripts/directives/dynamicAttr.directive.html";
	  res.scope = {
		  test : "="
	  };
	  
	  res.link = function($scope, elem, attr){
		  console.log("$scope",$scope.test);
		  $scope.testing = "Pankaj";
	  }
	  return res;
  });