/// <reference path="angular.min.js" />

app.config(['plutoSolutionsSerialServiceProvider', function (plutoSolutionsSerialServiceProvider) {
    plutoSolutionsSerialServiceProvider.config('');
}]);

app.provider('plutoSolutionsSerialService', function () {
    var baseUrl = '';

    this.config = function (url) {
        baseUrl = url;
    };

    this.$get = ['$http', '$log', '$q', function ($http, $log, $q) {
        var objService = {};

        objService.getXgMonData = function () {
            var deferred = $q.defer();
            $http({
                url: baseUrl + '/xgmondata',
                method: 'GET'
            }).then(
                function (resp) { deferred.resolve(resp); },
                function (resp) { $log.log('error of web service!'); }
            );
            return deferred.promise;
        };

        return objService;
    }];
});