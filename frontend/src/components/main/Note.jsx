import './style.css'

export const Note = ({note}) => {

    return (
        <div className="test-note-title">
            <p>Note Here {note.title}</p>
        </div>
    )
}