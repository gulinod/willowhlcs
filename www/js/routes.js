angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of statesg
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('cartTabDefaultPage', {
    url: '/page3',
    templateUrl: 'templates/cartTabDefaultPage.html',
    controller: 'cartTabDefaultPageCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })
    .state('rgbColorPicker', {
      url: '/page2',
      templateUrl: 'templates/colorPicker.html',
      controller : "rgbColorPicker"

    }
  );

$urlRouterProvider.otherwise('/page3')



});
