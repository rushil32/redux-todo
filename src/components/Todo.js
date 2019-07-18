import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ text = '', completed = false, onClick = () => {} }) => {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through': 'none'
      }}
    >
      {text}
    </li>
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Todo;
