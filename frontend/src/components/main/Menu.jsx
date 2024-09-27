import { useState, useEffect } from 'react'
import { Note } from './Note'
import './style.css'
import axios from 'axios'

export const Menu = ({user, setUser}) => {

    const [searchText, setSearchText] = useState("")
    const [notesList, setNotesList] = useState([])
    const [countNotes, setCountNotes] = useState(0)

    const handleLogout = () => {

        setUser(null)
    }

    useEffect(() => {

        const fetchFirstNotes = async () => {

            try {
    
                const notes = await axios.get(`http://localhost:8080/api/v1/note/getUserNotes/${user._id}`)
    
                if (notes.data.length > 0) {
    
                    setNotesList(notes.data)
                    setCountNotes(notes.data.length)
                }
    
            } catch (error) {
    
                console.log({status: error.response.status, message: error.response.data.error})
            }
        }

        fetchFirstNotes();
    }, [user._id]);

    return (
        <div className="home-menu">

        <header className='header'>
            <h1>Welcome {user.name}, you have {countNotes} note(s)</h1>
            <button className='logout-button' onClick={handleLogout}>Log Out</button>
        </header>

        <section className='search-section'>
            <h1 className='search-title'>Notes</h1>
                <input 
                className="search-box"
                type="text"
                placeholder="Hint to search..."
                onChange={e => setSearchText(e.target.value)}/>
                <button className="search-button">Find</button>
        </section>

        <section className='notes-list'>
            {
                notesList.length > 0 ? (

                    notesList.map(note => (
                        <Note key={note._id} note={note}/>
                    ))
                ) : (

                    <p className="test-note-title">No notes found</p>
                )
            }
        </section>

        </div>
    )
}