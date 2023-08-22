import { useRef, useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({onCreate}) => {

    // useState 생성
    const [content, setContent] = useState("");

    // 값 전송 이후 input focus 상태를 유지하도록 설정
    // useRef : 
    const inputRef = useRef();

    // content 수정시
    const onChangeContent = (e) => {
        console.log(e.target.value);
        setContent(e.target.value);
    }

    // input에서 enter 입력시
    const onKeyDown = (e) => {
        if (e.keyCode === 13 ) {
            onSubmit();
        }
    };

    // onSubmit
    const onSubmit= () => {

        if (!content) {
            inputRef.current.focus();
            return;
        }

        onCreate(content);      // onCreate(content) : App component의 method
        setContent("");
    };

    return (
        <div className="TodoEditor">
            <h4> 새로운 Todo 작성 ✒ </h4>
            <div className="editor_wrapper">
                <input placeholder="new Todo.."
                ref={inputRef}
                value={content}
                onChange={onChangeContent}
                onKeyDown={onKeyDown}
                />

                <button className="btn btn-primary" onClick={onSubmit}> 추가 </button>
            </div>
        </div>
    );
}

export default TodoEditor;