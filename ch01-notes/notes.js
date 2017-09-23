const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync("notes-data.json");
        return JSON.parse(notesString);   
    }catch(e) {
      return [];
    }
};

var saveNotes = (notes) =>{
    fs.writeFileSync("notes-data.json",JSON.stringify(notes))
}

var addNote = (title,body) => {
    var note = {
        title,
        body
    }
    var notes = fetchNotes();
    var duplicateNotes = notes.filter((note)=> note.title === title)
    
    if(duplicateNotes.length === 0 ){
        notes.push(note)
        saveNotes(notes);
        return note;
    }
    
}
var getAll = () => {
    var notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString)
}

var getNote = (title) => {
    var notes = fetchNotes()
    var filtered = notes.filter((note)=> note.title === title)
    return filtered[0]
}

var removeNote = (title) => {
    var notes = fetchNotes();
    var filtered = notes.filter((n) => n.title !== title)
    saveNotes(filtered)
    return notes.length != filtered.length
    
}

var logNote = (note) => {
    debugger;
    if(note) {
        console.log("-----")
        console.log(`Title : ${note.title}`)
        console.log(`Body : ${note.body}`)
    } else {
        console.log("No Note found")
    }
    
}

module.exports =  {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}
