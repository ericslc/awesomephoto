angular.module('myApp',['ui.router', 'ngCookies', 'ui.bootstrap', 'ngStorage'])

angular.module('myApp').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
      .state('home', {
         url: '/',
         templateUrl: './views/home.html',
         controller: 'mainController'
         access: {restricted: false}
      })
      .state('blog', {
        url: '/blog',
        templateUrl: './views/blog.html',
        controller: 'mainController'
        access: {restricted: false}
      })
      $urlRouterProvider.otherwise('/')
})
