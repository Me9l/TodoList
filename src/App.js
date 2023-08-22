
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
        createDate : new Date().getTime()
        // new Date().getDate() : UNIX 표준시 ( 1970.1.1 )
        // new Date().getTime() : 현재 시스템 날짜
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
    };

    // Todo 수정 함수 ( onUpdate )
    // 하위 컴포넌트로 받은 값 : tartgetId
    // 하위 컴포넌트로 부터 객체의 id값을 받아 isDone 의 값 수정
    // it : todo 배열의 객체를 받는 변수
    const onUpdate = (targetId) => {
        setTodo(
            todo.map( (thisItem) => 
                // thisItem.id 와 targetId가 같은 값을 찾아 isDone 필드의 값 수정
                thisItem.id === targetId ? { ...thisItem, isDone : !thisItem.isDone } : thisItem
            )
        );
    };

    // Todo 삭제 함수 ( onDelete )
    // 배열의 값을 filter() 메소드를 사용해 원하는 값을 검색
    // 배열 내부의 객체와 삭제할 id가 같지 않은것만 필터링해서 setTodo를 사용해 주입
    const onDelete = (targetId) => {
        setTodo(
            todo.filter( (thisItem) => 
                thisItem.id !== targetId
            )
        );
    };

    // 하위 컴포넌트가 App 컴포넌트로 이벤트 전달
    // 하위 컴포넌트 호출시 props로 이벤트 전달
    // TodoEditor : onCreate
    // TodoList => TodoItem : onUpdate , onDelete

    return (
        <div className="App">
            <Header />
            <TodoEditor onCreate={onCreate}/>
            <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
            {/* TodoList : todo = 하위컴포넌트에 전달하는 todo 값
                onUpdate , onDelete = 하위컴포넌트에서 발생한 이벤트와 값을 전달받는다. */}
        </div>
    );
}

export default App;
