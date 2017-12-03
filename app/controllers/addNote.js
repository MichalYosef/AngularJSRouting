app.controller('addNoteController',['$scope',function($scope, $notesService )
{
    $scope.title = 'Notes';
    $scope.note =  {
        text: "",
        date: ""
    };
    
    //called on ng-click
    this.addNote = function()
    {
        notesService.addNote($scope.note, onSuccess, onError );
    };

    function onSuccess(res) 
    {
        $scope.addResult = true;   
        alert("Saved!");
    }

    function onError(res) 
    {
        $scope.addResult = false;
        console.log('error');
        console.log(res);
        alert("Not Saved!");
    }

    
}]);