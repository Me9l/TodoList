import TodoItem from "./TodoItem";
import './TodoList.css';

const TodoList = ({todo, onUpdate, onDelete}) => {
    return(
        <div className="TodoList">
            <h4> Todo List ✔ </h4>
            <input className="searchbar" placeholder="입력하여 검색" />

            <div className="list_wrapper">
                <TodoItem />
            </div>
        </div>
    )
}

export default TodoList;