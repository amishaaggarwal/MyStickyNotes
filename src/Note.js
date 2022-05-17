import React, { Component } from "react";

class Note extends Component {
  updateTitle = event => {
    var updatedValue = event.target.value;
    var editNoteId = this.props.note.id;
    this.props.onType(editNoteId, "title", updatedValue);
  };

  updateDescription = event => {
    var updatedValue = event.target.value;
    var editNoteId = this.props.note.id;
    this.props.onType(editNoteId, "description", updatedValue);
  };

  clickDelete = () => this.props.deleteNote(this.props.note.id);

  render() {
    return (
      <li className="note">
        <input
          type="text"
          value={this.props.note.title}
          onChange={this.updateTitle}
          placeholder="Title"
          className="note__title"
        />
        <textarea
          value={this.props.note.description}
          onChange={this.updateDescription}
          className="note__description"
          placeholder="Description..."
        />
        <span className="note__delete" onClick={this.clickDelete}>
          X
        </span>
      </li>
    );
  }
}

export default Note;
