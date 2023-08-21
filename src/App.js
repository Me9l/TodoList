
import { useState, useRef } from 'react';

import "./App.css";

import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

// mock Data ( DummyData )
// object ( const 선언해도 속성값을 수정,삭제 가능 )
const mockData = [
    {
        id : 0,
        isDone : false,
        content : "Study React",
        createDate : new Date().getDate()
    },
    {
        id : 1,
        isDone : false,
        content : "Study Spring Boot",
        createDate : new Date().getDate()
    },
    {
        id : 2,
        isDone : false,
        content : "Study QueryDSL",
        createDate : new Date().getDate()
    },
]

function App() {
    // root component 에서 하위 component로 값을 전달 할 수 있다.
    // useState
    const [todo, setTodo] = useState(mockData);
        // todo : 배열 [{객체},{객체},{객체}...]

    // Life cycle Of Component : 생성(mount) => 수정(값 변경시 re-render) => 삭제(unmount)
    //  컴포넌트가 생성되는 시점에서 객체의 id값 : 0,1,2
    //  id 값을 3번부터 할당 ( 생성시점이 아닌 수정시점 에서 초기값 설정 )
    const idRef = useRef(3);

    // Todo 생성 함수 ( onCreate )
    const onCreate = (content) => {
        const newItem = {
            id : idRef.current,
            content,
            isDone : false,
            createDate : new Date().getTime(),
        };
        setTodo([newItem, ...todo]);
        idRef.current += 1;
    }

    // Todo 수정 함수 ( onUpdate )


    // Todo 삭제 함수 ( onDelete )


    return (
        <div className="App">
            <Header />
            <TodoEditor />
            <TodoList />
        </div>
    );
}

export default App;
