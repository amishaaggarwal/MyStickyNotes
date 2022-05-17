import React from "react";
import Note from "./Note";

var keepSearchMatches = note => note.doesMatchSearch;

var NotesList = props => {
  var renderNote = note => (
    <Note
      note={note}
      key={note.id}
      onType={props.onType}
      deleteNote={props.deleteNote}
    />
  );

  var searchMatches = props.notes.filter(keepSearchMatches);
  var noteElements = searchMatches.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
