var myApp  =  angular.module('myApp', []);

myApp.controller('jsonCtrl', function($scope, $http){
	$http.get('contacts.json').success(function (data){
		$scope.contacts = data;
	});

    $scope.addPerson = function(){
        $scope.contacts.push({ name:$scope.cName, phone:$scope.cPhone, email:$scope.cEmail, birthday:$scope.cBirthday, avatar:$scope.cAvatar });
    }
	
	$scope.getTotalContacts    =   function(){
        return $scope.contacts.length;    
    }
});

function testCtrl($scope){
  $scope.people = [
    {"id": 22,
			"name": "Janice Eyeball",
			"phone": "(222) 456-7890",
			"email": "one.eye.open@ilumin.com",
			"birthday": "01/01/1955",
			"avatar": "http://lorempixel.com/300/300/people/1" 
	}
   ];
    
   $scope.addPerson = function(){
      $scope.people.push({ name:$scope.myName });
   }
   
    
}
