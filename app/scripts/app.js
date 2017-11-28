'use strict';

/**
 * @ngdoc overview
 * @name myInterviewAppApp
 * @description
 * # myInterviewAppApp
 *
 * Main module of the application.
 */
angular
  .module('myInterviewAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
	  .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/questions', {
        templateUrl: 'views/questions.html',
        controller: 'QsnCtrl',
        controllerAs: 'qsn'
      })
      .when('/interviewPrep', {
        templateUrl: 'views/interviewPrep.html',
        controller: 'InterviewprepCtrl',
        controllerAs: 'interviewPrep'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
