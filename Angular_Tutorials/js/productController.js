var myRest = angular.module('myRest', []);
myRest.controller('RestController',  function($scope,productService){	
	$scope.getAllProducts=function(){
		productService.getAllProducts().then(
			function(data){
				$scope.products=data;
			},
			function(error){
				$scope.error=error;
			}
			);
	}
	$scope.getAllProducts();
   
    // add product
    $scope.productName="";
	$scope.productPrice="";
	$scope.productCategory="";
	$scope.submitButton=true;	
    $scope.addProduct = function(){
    	if($scope.productName == "" || $scope.productPrice == "" || $scope.productCategory == ""){
    		return;
    	}else{  
    	var product = {name: $scope.productName, price: $scope.productPrice, category: $scope.productCategory};		
    	productService.addProduct(product).then(function(response){
    		alert("Added");
    		$scope.getAllProducts();
    	},
    	function(errorResponse){
    		alert("Error");
    	});
    }
    }
    // get product data
    $scope.getProduct = function(id){
    	productService.getProduct(id).
        then(function(data) {
            $scope.products = data;
            $scope.productName=data.name;
    		$scope.productPrice=data.price;
    		$scope.productCategory=data.category;
    		$scope.submitButton=false;
    		$scope.editButton=true;
    		$scope.id=id;
    		$scope.getAllProducts();
        });
    };
    // update product data
    $scope.updateProduct = function(id){
    	if($scope.productName == "" || $scope.productPrice == "" || $scope.productCategory == ""){
    		return;
    	}else{ 
    		var product = {name: $scope.productName, price: $scope.productPrice, category: $scope.productCategory};	
    		productService.updateProduct(product,id).then(function(response){
    		alert("Updated");
    		$scope.getAllProducts();
    		},
    		function(errorResponse){
    			return errorResponse;
    		});
    		
    	}
    };
    // delete product data
    $scope.deleteProduct = function(id){
    	productService.deleteProduct(id).then(function(response){
    		alert("Deleted");
    		$scope.getAllProducts();
    	},
    	function(errorResponse){
    		console.error("Error while deleting product");
    	});
    };
});