angular.module("jobAdApp").controller("mainCtrl", function ($scope) {

    $scope.userClicked = false;

    $scope.enlargeImg = function (fileName) {
        $scope.userClicked = false;
        $("#fw-container").addClass("full-width-img");
        $scope.imgName = fileName;
    }

    $scope.closeImg = function () {
        $("#fw-container").removeClass("full-width-img");
        $scope.userClicked = true;
    }

});