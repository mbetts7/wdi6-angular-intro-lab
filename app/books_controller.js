var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;
  $scope.cartBooks = [];
  $scope.total = 0;

  $scope.selects = ['author', 'title', 'price'];
  $scope.select = 'title';

  //Code to manage cart goes here
  $scope.addCart = function(index) {
    var book = _.find(books, function(b) {
      return b.id === index;
    });

    console.log(book.id);

    $scope.cartBooks.push(book);
    $scope.total += book.price;

  };

};
