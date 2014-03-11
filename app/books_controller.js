var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;
  $scope.cartBooks = [];
  
  $scope.count = 0;
  $scope.total = 0;

  $scope.selects = ['author', 'title', 'price'];
  $scope.select = 'title';

  //Code to manage cart goes here
  $scope.addCart = function(book) {
    
    console.log(book);

    if ($scope.cartBooks.indexOf(book) >= 0){
      // 2nd plus times added
      book.quantity += 1;  // individual book quantity
      $scope.total += book.price;
      $scope.count += 1; // total total books in cart
    } else {
      // 1st add of book
      book.quantity = 1; // individual book quantity
      $scope.cartBooks.push(book);
      console.log($scope.cartBooks);
      $scope.total += book.price;
      $scope.count += 1; // total total books in cart
    }
  };

  $scope.emptyCart = function() {
    $scope.cartBooks = [];
    $scope.count = 0;
    $scope.total = 0;
  };

};