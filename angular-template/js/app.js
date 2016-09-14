angular.module('myApp',['ui.router', 'ngCookies', 'ui.bootstrap', 'ngStorage'])

angular.module('myApp').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
      .state('home', {
         url: '/',
         templateUrl: '/home.html',
         controller: 'mainController'
      })
      .state('page', {
        url: '/page',
        templateUrl: '/page.html',
        controller: 'mainController'
      })
      $urlRouterProvider.otherwise('/')
})
