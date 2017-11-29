"use strict"; 

var app = angular.module('mainApp',['ngRoute']);

app.config(function($routeProvider){

    $routeProvider.when("/",{
        templateUrl: 'views/home.html',
        controller: 'homeController'
    })
    .when("/about",{
        templateUrl: 'views/about.html',
        controller: 'aboutController'
    })
    .when("/contact",{
        templateUrl: 'views/contact.html',
        controller: 'contactController'
    })
    .when("/location",{
        templateUrl: 'views/location.html',
        controller: 'curLocationCtrl'
    })
    .when("/seaOrLand",{
        templateUrl: 'views/seaOrLand.html',
        controller: 'seaOrLandController'
    })
    .otherwise({redirectTo:'/'});

});