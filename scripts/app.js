var app = angular.module("route-app", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "view/main.htm"
    })
    .when("/about", {
      templateUrl: "view/about.htm"
    })
    .when("/portfolio", {
      templateUrl: "view/portfolio.htm"
    })
    .when("/investment", {
      templateUrl: "view/investment.htm"
    })
    .when("/contact", {
      templateUrl: "view/contact.htm"
    });
});