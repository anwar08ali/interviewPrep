'use strict';

/**
 * @ngdoc function
 * @name myInterviewAppApp.controller:InerviewprepCtrl
 * @description
 * # InerviewprepCtrl
 * Controller of the myInterviewAppApp
 */
angular.module('myInterviewAppApp')
  .controller('InterviewprepCtrl', function AppCtrl ($scope, $log) {
    var tabs = [
          { title: 'Directive', contentUrl: 'views/directive-content.html'},
          { title: 'Two', contentUrl: 'views/filter-content.html'}
        ],
        selected = null,
        previous = null;
    $scope.tabs = tabs;
	$scope.testArr = ["Anwar"];
	
    $scope.selectedIndex = 0;
    $scope.$watch('selectedIndex', function(current, old){
      previous = selected;
      selected = tabs[current];
      
    });
    $scope.addTab = function (title, view) {
      view = view || title + " Content View";
      tabs.push({ title: title, content: view, disabled: false});
    };
    $scope.removeTab = function (tab) {
      var index = tabs.indexOf(tab);
      tabs.splice(index, 1);
    };
  
})
