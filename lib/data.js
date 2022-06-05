const fs = require("fs");
const notes = require("../data/db.json");
const { nanoid } = require("nanoid");
const { monitorEventLoopDelay } = require("perf_hooks");

const addNote = (note) => {
  note.id = nanoid();
  newArr = note ? (newArr = notes) : (newArr = []);
  newArr.push(note);
  fs.writeFile("./data/db.json", JSON.stringify(newArr), (err) => {
    if (err) throw err;
    console.log("Note has been added");
  });
  return;
};

const deleteNote = (note) => {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === note.id) {
      notes.splice(i, 1);
      console.log("Note has been deleted");
    }
  }
  return;
};

module.exports = { addNote, deleteNote };
