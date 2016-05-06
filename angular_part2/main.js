'use strict';

angular.module('booksApp', [])
	.controller('BookListController', ['$http', BookListController]);

function BookListController($http) {
	var self = this;
	self.onlyFav = false;
	self.loadSuccess = true;
	self.books = null;
	$http.get('data/books.json').success(function(data) {
		self.books = data;
	})
	.error(function() {
		self.loadSuccess = false;
	});
}