app.controller('curLocationCtrl',function($scope, $location){
    $scope.title = 'Location by AngularJs Service';
    $scope.currentUrl = $location.absUrl();
    console.log($scope.currentUrl);
});