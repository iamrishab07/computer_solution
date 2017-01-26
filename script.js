var app = angular.module("myApp",['ngRoute'])

.config(['$routeProvider',function($routeProvider){
  $routeProvider.
    when('/',{
      templateUrl: 'main.html',
      controller: 'MainCtrl'
    }).
    when('/about',{
      templateUrl: 'about.html',
      controller: 'MainCtrl'
    }).
    when('/contact',{
      templateUrl: 'contact.html',
      controller: 'ContactCtrl'
    }).
        when('/services',{
      templateUrl: 'services.html',
      controller: 'ServiceCtrl'
    }).
    otherwise({redirectTo:'/main'})
}]);

app.controller("MainCtrl",['$scope',function($scope){
  console.log($scope);
}]);


app.controller("ContactCtrl",['$scope',function($scope){
  console.log("Contact page");
}]);

app.controller("ServiceCtrl",['$scope','$http',function($scope,$http){
  $http.get('services.json').then(function(response){
    $scope.services = response.data;
  });
}]);