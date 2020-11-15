import React,{ useState } from 'react';
import propTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
    const [text, setText] = useState('');

    const onChange = e => {
        setText(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        if(text === '') {
            setAlert('please enter something', 'light');
        } else {
            searchUsers(text);
            setText('');
        }
        
    }
    
    return (
        <div>
            <form onSubmit={onSubmit} className='rorm'>
                <input type='text' name='text' placeholder='Search Users...'
                value={text}
                    onChange={onChange}/>
                <input 
                    type='submit'
                    value='Search'
                    className='btn btn-dark btn-block'
                />
            </form>
            {showClear && <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>}
                
        </div>
    );
    
}

Search.propTypes = {
    searchUsers: propTypes.func.isRequired,
}

export default Search
