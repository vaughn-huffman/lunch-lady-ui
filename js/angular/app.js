"use strict";

var lunchladyApp = angular.module('lunchladyApp', [
	'ngCookies'
]);

lunchladyApp.controller('UserLoginController', [
	'$scope',
	'$rootScope',
	'$cookieStore',
	'AuthenticationService',
	UserLoginController
]);

lunchladyApp.factory('AuthenticationService', [
	'$http',
	AuthenticationService
]);