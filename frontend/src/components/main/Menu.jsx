export const Menu = ({user, setUser}) => {

    const handleLogout = () => {

        setUser(null)
    }

    return (
        <div className="home-menu">

            <h1>Welcome {user.name}</h1>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    )
}