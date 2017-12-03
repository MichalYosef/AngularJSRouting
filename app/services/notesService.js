app.service('notesService', function($http) 
{    
    var notesArr = [];

    this.addNote = function(note, onSuccess, onError ) 
    {
        var strFromStorage = localStorage.getItem("taskArr");
        
        if( strFromStorage != null)
        {
            notesArr = JSON.parse(strFromStorage);
        }
    
        notesArr.push( note );
    
        localStorage.setItem("taskArr", JSON.stringify(taskArr));
        
        onSuccess("Note was added");
            
        // notify the controller that shows the notes
        
    }

    this.deleteNote = function(id, onSuccess, onError ) 
    {
        notesArr.splicae(id,1);

            
        // notify the controller that shows the notes
        
    }

    
});