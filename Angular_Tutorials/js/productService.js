myRest.factory('productService', ['$http', function($http){
	return{
		// get all products data method
		getAllProducts:function(){
		var successCallBack = function(response){
		return response.data._embedded.products;
		}	
		var errorCallBack = function(response){
		return response.data;
		}
		return $http({method:'GET',url:'http://localhost:8080/products'}).
        then(successCallBack,errorCallBack);
		},
		// add product service method
		addProduct:function(product){			
    		return $http.post('http://localhost:8080/products', product).
    		then(function(response, status, headers) {
    		return response.data;
             // var newTaskUri = headers()["location"];
             // console.log("Might be good to GET " + newTaskUri + " and append the task.");
             // Refetching EVERYTHING every time can get expensive over time
             // Better solution would be to $http.get(headers()["location"]) and add it to the list
             
      },
      function(errorResponse){
      	return errorResponse.data;
      }
      );
    	
		},
		// get product by id
		getProduct:function(id){
			return $http.get('http://localhost:8080/products/'+id).
			then(function(response){
				return response.data;
			},
			function(errorResponse){
				return errorResponse.data;
			});
		},
		//update product by id
		updateProduct:function(product,id){
			return $http.put('http://localhost:8080/products/'+id,product).
			then(function(response){
				return response.data;
			},
			function(errorResponse){
				return errorResponse.data;
			});
		},
		// delete product by id
		deleteProduct:function(id){
			return $http.delete('http://localhost:8080/products/'+id).
			then(function(response){
				return response.data;
			},
			function(errorResponse){
				console.error("Error while deleting user");
			});
		}
	};
}])