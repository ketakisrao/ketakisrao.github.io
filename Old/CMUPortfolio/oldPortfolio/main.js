var app = angular.module('myApp', ["ngMaterial"]);
app.controller('myController', ["$scope", "$timeout", function ($scope, $timeout) {
    var init = function () {
        var description = "<b class=\"title\">KETAKI RAO</b><br> UI developer & Designer"
        var poster = document.getElementById("poster");
        var html = "<div class=\"content\">" + description + "</div>";
        for (i = 1; i <= 63; i++) {
            html += '<img src="MyIcons/pi' + i + '.svg" />\n';
        }
        console.log(html);
        poster.innerHTML = html;
    }
    
    init();
}])