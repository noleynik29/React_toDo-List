import React, {useState, useEffect, useRef} from 'react'

function ToDoForm(props) {
const [input, setInput] = useState(props.edit ? props.edit.value: '');

const inputRef = useRef(null);

useEffect(() => {
    inputRef.current.focus();
});

const handleChange = e => {
    setInput(e.target.value);
};

const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    });
    setInput('')
};

  return (
    <div>
        <form className='toDo-form' onSubmit={handleSubmit}>
            { props.edit ? ( 
            <> 
            <input
                  type='text'
                  placeholder='Update your ToDo'
                  value={input} name='text'
                  className='toDo-input edit'
                  onChange={handleChange}
                  ref={inputRef} 
                  />
                  <button className='toDo-button edit'>Update</button>
                  </> ) : (
                  <>
                    <input
                      type='text'
                      placeholder='Add a toDo'
                      value={input} name='text'
                      className='toDo-input'
                      onChange={handleChange}
                      ref={inputRef} /><button className='toDo-button'>Add toDo</button>
                      </>
                      )}
        </form>
    </div>
  )
}

export default ToDoForm