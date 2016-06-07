var myRest = angular.module('myRest', []);
myRest.controller('RestController',  function($scope,$http){
	function getAllProducts(){
		$http.get('http://localhost:8080/products').
        success(function(data) {
            $scope.products = data._embedded.products;
        });
	}
    $scope.getProduct=getAllProducts();

    // add product
    $scope.productName="";
    $scope.productPrice="";
    $scope.productCategory="";
    $scope.addProduct = function(){
    	if($scope.productName == "" || $scope.productPrice == "" || $scope.productCategory == ""){
    		return;
    	}else{

    		$http.post('http://localhost:8080/products', {
             name: $scope.productName,
             price: $scope.productPrice,
             category: $scope.productCategory
         }).
    success(function(data, status, headers) {
    alert("Task added");
             // var newTaskUri = headers()["location"];
             // console.log("Might be good to GET " + newTaskUri + " and append the task.");
             // Refetching EVERYTHING every time can get expensive over time
             // Better solution would be to $http.get(headers()["location"]) and add it to the list
             $scope.getProduct=getAllProducts();
      });
    	}
    }
});