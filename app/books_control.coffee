bookly = bookly or {}

bookly.bookApp = angular.module("bookApp", [])

bookly.BooksControl = ($scope) ->
  $scope.books = books
  $scope.cartBooks = []
  $scope.count = 0
  $scope.total = 0
  $scope.selects = ['author', 'title', 'price']
  $scope.select = 'title'
  return

  $scope.addCart = (book) ->
    if ($scope.cartBooks.indexOf(book) >= 0)
      book.quantity += 1
      $scope.total += book.price
      $scope.count += 1
      return
    else 
      book.quantity = 1
      $scope.cartBooks.push(book)
      console.log($scope.cartBooks)
      $scope.total += book.price
      $scope.count += 1
      return

  $scope.emptyCart = ->
    $scope.cartBooks = []
    $scope.count = 0
    $scope.total = 0
    return  
  return
