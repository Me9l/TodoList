import "./TodoEditor.css";

const TodoEditor = () => {

    return (
        <div className="TodoEditor">
            <h4> 새로운 Todo 작성 ✒ </h4>
            <div className="editor_wrapper">
                <input placeholder="new Todo.." />
                <button className="btn btn-primary"> 추가 </button>
            </div>
        </div>
    );
}

export default TodoEditor;