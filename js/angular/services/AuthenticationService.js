"use strict";

function AuthenticationService() {
	var service = {};

	service.login = function (username, password) {
		var result = {};
		
		// TODO - Remove and replace with real authentication
		if (username === "test" && password === "test") {
			result.success = true;
			result.loginCookie = "TESTUSER";
			result.userInfo = {
				"id" : 1234,
				"firstName" : "Spongebob",
				"lastName" : "Squarepants",
				"email" : "bob@xpanxion.com",
				"phone" : "555-555-5555",
				"office" : 123,
				"password" : "squidward",
			}
		}
		return result;
	};

	service.LOGGED_IN_COOKIE = "user_logged_in";
	return service;
}