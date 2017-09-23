
const fs = require('fs');
const _ = require("lodash")
const yargs = require('yargs')
const notes = require("./notes")

const titleOptions = {
    describe : "Title of the note",
    demand: true,
    alias : 't'
}

const bodyOptions  = {
    describe : "Content of the note",
    demand: true,
    alias : 'b'
  }
const argv = yargs
.command('add','add a new note' ,{
  title :titleOptions,
  body : bodyOptions
})
.command('list','List all Notes')
.command('remove','Remove a Note' ,{
    title :titleOptions
})
.command("read","Read a Note",{
    title :titleOptions
})
.help()
.argv;

const command = argv._[0]

if (command === "add") {
    var note = notes.addNote(argv.title, argv.body)
    if (note) {
        console.log("Note was created successfully.")
    } else {
        console.log("Note with that title already exists")
    }

} else if (command === "list") {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes`)
    allNotes.forEach((n) => notes.logNote(n))

} else if (command === "remove") {
    var removed = notes.removeNote(argv.title)
    var msg = removed ? "Note removed successfully" : "No Such Note"
    console.log(msg)

} else if (command === "read") {
    var note = notes.getNote(argv.title)
    notes.logNote(note)

} else {
    console.log("Unrecognized command")
}
