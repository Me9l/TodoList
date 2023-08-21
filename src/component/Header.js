import './Header.css'

const Header = () => {

    return (
        <div className="Header">
            <h2> ToDoList </h2>
            <h3> {new Date().toDateString() } </h3>
        </div>
    )

}

export default Header;