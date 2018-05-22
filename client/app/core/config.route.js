
angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',

        function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
            $urlRouterProvider
                .otherwise('/app/template');

            $stateProvider
                // Overall
                .state('app', {
                    url: '/app',
                    templateUrl: "app/app.html"
                })

                // Home
                .state('app.template', {
                    url: '/template',
                    templateUrl: "app/template/template.html"
                })

                // UI
            
                .state('signin', {
                    url: '/signin',
                    templateUrl: 'app/page-extra/signin.html'
                })
                .state('signup', {
                    url: '/signup',
                    templateUrl: 'app/page-extra/signup.html'
                })
            ;
        }
    ]);