(function () {
    'use strict';

    // Default run function
    var runApp = function ($rootScope) {
        $rootScope.projectName = 'Fiddus';
    };

    runApp.$injector = ['$rootScope'];


    // Default route
    var routesApp = function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    };

    routesApp.$injector = ['$urlRouterProvider'];


    // Main module
    angular.module('<%= angularModuleName %>', [
        'ui.router',
        'templates-fiddus',
        'constants-api-url',
        'factory-api-requests'
    ])
        .config(routesApp)
        .run(runApp);
})();
