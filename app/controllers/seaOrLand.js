app.controller('seaOrLandController',function($scope, SeaOrLandService ){
    $scope.title = 'ים / יבשה ';
    $scope.gotApiAnswer = false;
    $scope.result = '';
    $scope.coords = {
        x: 23.92323,
        y: -66.3
    };
    $scope.totalCount = 0;
    $scope.seaCount = 0;
    $scope.earthCount = 0;
    
    

    function onSuccess(res) {

        $scope.gotApiAnswer = true;
        $scope.totalCount++;

        if(res.data.water)
        {
            $scope.result = 'sea';
            $scope.seaCount++;
        }
        else
        {
            $scope.result = 'earth';
            $scope.earthCount++;
        }
    }

    function onError(res) {
        $scope.gotApiAnswer = false;
        console.log('error');
        console.log(res);
    }

    $scope.checkCoords = function() { //called on ng-click
        $scope.gotApiAnswer = false;
        var coords = {
            x: $scope.x,
            y: $scope.y
        };

        SeaOrLandService.checkSeaOrLand($scope.coords, onSuccess, onError );
    }
});