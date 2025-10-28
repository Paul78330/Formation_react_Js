import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from './utils/Utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState('')

  const handleTextChange = ({target}) => {
    const {value} = target
    setText(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(text.length){
      const thought = {
      id : generateId(),
      text: text,
      expiresAt : getNewExpirationTime()
    }
    props.addThought(thought);
    setText('')
    }
  }

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value = {text}
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
