app.controller('seaOrLandController',function($scope, SeaOrLandService ){
    $scope.title = 'ים / יבשה ';
    $scope.gotApiAnswer = false;
    $scope.result = '';
    $scope.coords = {
        x: 23.92323,
        y: -66.3
    };
    

    function onSuccess(res) {
        $scope.gotApiAnswer = true;
        if(res.data.water)
            $scope.result = 'sea';
        else
            $scope.result = 'earth';
    }

    function onError(res) {
        $scope.gotApiAnswer = false;
        console.log('error');
        console.log(res);
        
        
       
    }

    

    $scope.checkCoords = function() { //ng-click
        $scope.gotApiAnswer = false;
        var coords = {
            x: $scope.x,
            y: $scope.y
        };

        SeaOrLandService.checkSeaOrLand(coords, onSuccess, onError );
    }
});