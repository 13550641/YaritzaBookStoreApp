(function() {
    var app = angular.module('BookStoreApp', []);


    app.controller('BooksController', function($scope, $http) {
        $http.get('public/dat.json')
            .then(function(res) {
                $scope.booksData = res.data;
            });
    });
})();