app.service('SeaOrLandService', function($http) {
    
    var debugMode = true;

    this.checkSeaOrLand = function(coords, onSuccess, onError ) {

        if (debugMode) {
            setTimeout(function() {
                const mockObj = {
                    data: {
                        "lat": coords.lat,
                        "lon": coords.lon,
                        "water": Math.ceil(Math.random()*10) % 2 == 0
                    }
                }

                onSuccess(mockObj);
            }, 1 * 1000)
        } else {
            $http({
                url: 'https://api.onwater.io/api/v1/results/[latitude],[longitude]',
                method: 'GET',
                params: {
                    latitude: coords.x,
                    longitude: coords.y,
                    access_token: 'kvQ7cd1Bgp-SyQqELMky'
                }
            }).then(onSuccess, onError);
        }
    }
});