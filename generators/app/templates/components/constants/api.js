(function () {
    'use strict';

    var apiUrl = {
        apiUrl: 'http://www.api.fiddus.com.br:9000'
    };


    angular.module('constants-api-url', [])
        .constant('API_URL', apiUrl);
})();
