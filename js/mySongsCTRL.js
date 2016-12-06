app.controller('mySongs', function ($scope, $http, $routeParams) {

    $http({
        url: 'getSongs.php',
        method: 'POST',
        data: {id: $routeParams.id}
    })
        .then(function (response) {
            $scope.songs = response.data;
        });


    // array of songs
    $scope.songs = [];

    // on start player
    $scope.startAudio = function (index) {

        // console.log($scope.setSongs($scope.songs));
        $scope.setSongs($scope.songs); // set songs to player
        $scope.startPlayer(index); // starting player

    }





})