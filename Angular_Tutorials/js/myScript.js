//Creating module
var myApp = angular.module('myModule', []);

//Creating controller

myApp.controller('myController',  function($scope){
	//Creating object
	var myself ={
		firstName:"Kyaw Zin",
		lastName:"Htun",
		Gender:"Male"
	};
	$scope.myself=myself;

	// prepare for ng-src
	var country = {
		name:"Myanmar",
		image:"images/mm.png"
	};
	$scope.country = country;

	// Creating object list
	// prepare data for ng-repeat
	var students = [
	{name : "Phyo Ko", year: "Third Year"},
	{name : "Myint Zaw", year: "Second Year"},
	{name : "Phyo Oo", year: "Pregraduate"}
	];
	$scope.students=students;

	// perpare for handling event in angularjs
	var technologies = [
	{name : "Java", like : "0", dislike : "0"},
	{name : "C#", like : "0", dislike : "0"},
	{name : "ASP", like : "0", dislike : "0"},
	{name : "PHP", like : "0", dislike : "0"},
	{name : "Android", like : "0", dislike : "0"}
	];
	$scope.technologies = technologies;

	// create increasement function for like
	$scope.likeIncrement = function(technology){
		technology.like++;
	}

	// create increment function for dislike
	$scope.disLikeIncrement = function(technology){
		technology.dislike++;
	}

	//prepare object list for angularjs filter test
	var employees = [
	{name : "Messi",dateofBirth : new Date("November 23, 1980"),gender : "Male", salary : "380000.49322"},
	{name : "Wanye",dateofBirth : new Date("October 11, 2000"),gender : "Male", salary : "4363423.49322"},
	{name : "Neymar",dateofBirth : new Date("November 02, 1990"),gender : "Male", salary : "732323.49322"},
	{name : "Suarez",dateofBirth : new Date("November 23, 1980"),gender : "Male", salary : "112354.49322"},
	{name : "Iniasta",dateofBirth : new Date("November 23, 1980"),gender : "Male", salary : "431451.49322"},
	{name : "Tony Kroo",dateofBirth : new Date("November 23, 1980"),gender : "Male", salary : "380000.49322"},
	{name : "Puyol",dateofBirth : new Date("October 11, 2000"),gender : "Male", salary : "4363423.49322"},
	{name : "Degia",dateofBirth : new Date("November 02, 1990"),gender : "Male", salary : "732323.49322"},
	{name : "Machirano",dateofBirth : new Date("November 23, 1980"),gender : "Male", salary : "112354.49322"},
	{name : "Silver",dateofBirth : new Date("November 23, 1980"),gender : "Male", salary : "431451.49322"},
	{name : "Raphal",dateofBirth : new Date("November 23, 1980"),gender : "Male", salary : "431451.49322"}
	];
	$scope.employees = employees;
	$scope.rowLimit = 3;
	// pagination with table header sort and row limit
	$scope.sortColumn="name";
	$scope.reverseSort=false;
	$scope.sortData=function(column){
	$scope.reverseSort=($scope.sortColumn==column) ? !$scope.reverseSort : false;
	$scope.sortColumn=column;
	};
	$scope.getSortClass=function(column){
		if($scope.sortColumn==column){
			return $scope.reverseSort ? 'arrow-down':'arrow-up';
		}
		return '';
	}
	$scope.limit=3;
	$scope.dataSize=employees.length;
	$scope.getNumber=function(size,limit){
		if(size % limit !==0){
		 $scope.dividence=Math.floor(size/limit+1);	
			return new Array($scope.dividence);
	}else{
		$scope.dividence=Math.floor(size/limit);
		return new Array($scope.dividence);
	}
			
	};	
	$scope.activeButton=1;
	$scope.goPage=function(pageNumber,limit){
		$scope.page=pageNumber*limit;
		$scope.activeButton=pageNumber+1; 
	};
	
	// filter by multiple properties
	// creating object list
	$scope.friends=[
	{name:"Saw Lay", gender:"male", city:"Nyaung Lay Pin"},
	{name:"Hlaing Win Tun", gender:"male", city:"Taung Ngu"},
	{name:"Ya Mone Phu", gender:"female", city:"Kyaut Kyee"},
	{name:"Ju Ju", gender:"female", city:"Nay Pyi Taw"},
	{name:"Lin Ko", gender:"male", city:"Bago"}
	];
	$scope.search = function(item){
		if($scope.searchMultipleText == undefined){
			return true;
		}else{
			if(item.name.toLowerCase().indexOf($scope.searchMultipleText.toLowerCase()) != -1 || 
				item.city.toLowerCase().indexOf($scope.searchMultipleText.toLowerCase()) != -1){
				return true;
			}
		}
		return false;
	};

	// create custom filter
	// create object list
	$scope.celes = [
	{name: "Dway", gender:1},
	{name: "Taylar Swift", gender:2},
	{name: "Jackie Chan", gender:1},
	{name: "Scarlet Jhonhanson", gender:2},
	{name: "Shuruk Khan", gender:1},
	{name: "Unknown", gender: 3}
	];
});