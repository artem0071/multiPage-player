app.controller('myPlayer', function ($scope) {
    
    // Player array of songs
    $scope.songs = [];

    // Set songs from other controllers
    $scope.setSongs = function(songs){
        $scope.songs = songs;
    };

    //defaults
    $scope.nowPlay = 0;
    $scope.repeat = false;
    $scope.isPaused = false; // pause marker

    // creating player
    $scope.player = document.getElementById("player");

    // on clicking Play song
    $scope.playSong = function (id) {

        // if song was paused and it is the same song
        if ($scope.isPaused && typeof(id === 'undefined') ) {
            $scope.player.play(); // start playing
            $scope.isPaused = false; // return marker to default
        }
            // if it is new song
        else {
            $scope.nowPlay = id || 0;
            $scope.player.src = 'files/' + $scope.songs[$scope.nowPlay].file; // set path to file
            $scope.player.play(); //start playing
            $scope.isPaused = false;
        }
    }

    // if we want to pause song
    $scope.pauseSong = function () {
        $scope.player.pause(); // pause the song
        $scope.isPaused = true; // set pause marker
    }

    // if we want next song
    $scope.nextSong = function () {
        var max = $scope.songs.length; // get count of songs

        // check if it is the last song
        if ($scope.nowPlay < max-1) {
            $scope.playSong($scope.nowPlay+1);
        } else if ($scope.repeat) $scope.playSong(0);
    }

    $scope.prevSong = function () {
        // check if it is the first song
        if ($scope.nowPlay > 0) $scope.playSong($scope.nowPlay-1);
    }

    // on the song ending
    $scope.player.addEventListener('ended', function(){

        // set the next song
        $scope.nextSong();
        // $scope.$apply();  // APPLY

    });

    // start player from other controller
    $scope.startPlayer = function (index) {
        $scope.playSong(index);
    }

})