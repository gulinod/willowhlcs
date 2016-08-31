angular.module('app.controllers', [])

.controller('cartTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
  .controller('lightListCtrl', function ($scope, $state) {

    $scope.goToColorPicker = function () {
      console.log("Clicked!");
      $state.go('rgbColorPicker');

    }



  })
  .controller('rgbColorPicker', function ($scope) {



  });
