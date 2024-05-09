import React, { useState, useEffect } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

import './notes.css';   

const Notes = (props) => {
    const [notes, setNotes] = useState([]);

    // Correctly retrieving the 'phonenumber' query parameter
    const searchParams = new URLSearchParams(window.location.search);
    const phoneNumber = searchParams.get('phonenumber');

    useEffect(() => {
        fetch(`https://661bfc9ce7b95ad7fa6975f0.mockapi.io/pilot/notes?phone=${phoneNumber}`)
        .then(response => response.json())
        .then(data => setNotes(data));
    }, [phoneNumber]); // Adding phoneNumber as a dependency to refetch when it changes

    return (
        <>
            <div>
                <div className='notes'>
                    <ul>
                        {notes.map((note, index) => (
                            <li key={index}>{note.notes}<FaTrashAlt className='icoRemove'/>     
                            </li> // Assuming each note has a 'content' property    
                        ))}
                    </ul>
                </div>
                <div className='notesInput'>
                    <input type="text" placeholder="Add a short note" /> 
                    <IconContext.Provider value={{ size: "30px", className: "addIco"}}>
                        <IoIosAddCircle/>
                    </IconContext.Provider>
                </div>
            </div>
        </>
    );
};

export default Notes;
