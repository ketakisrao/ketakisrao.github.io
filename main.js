var app = angular.module('myApp', []);
app.controller('myController', ["$scope", "$timeout", function ($scope, $timeout) {
    var init = function () {
        var poster = document.getElementById("poster");
        var html = "<div class=\"content\">I am a front-end developer</div>";
        for (i = 1; i <= 66; i++) {
            html += '<img src="MyIcons/pi' + i + '.svg" />\n';
        }
        // console.log(html);
        poster.innerHTML = html;
    }

    $scope.dec = function (opacity) {
        
    }

    init();
}])