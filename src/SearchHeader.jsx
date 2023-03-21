import React from 'react'
import { useState } from 'react';

const SearchHeader = ({ search }) => {
    const [valueInput, setValue] = useState('');
    const handleFormSubmit = (event) => {
        event.preventDefault();
        search(valueInput)
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return (
        <div className='searchDiv'>
            <form onSubmit={handleFormSubmit}>
                <label>What are you looking for?</label>
                <center>
                    <input onChange={handleChange} value={valueInput} type="text" />
                </center>
            </form>
        </div>
    )
}

export default SearchHeader