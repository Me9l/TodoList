import { useState } from "react";
import TodoItem from "./TodoItem";
import './TodoList.css';

const TodoList = ({todo, onUpdate, onDelete}) => {

    // 검색
    const [search, setSearch] = useState("");

    // input 수정시 호출
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    // 검색어 처리
    const getSearchResult = () => {
        return search === "" ? todo : todo.filter( (thisItem) => thisItem.content.toLowerCase().includes(search.toLowerCase()))
    }
    return(
        <div className="TodoList">
            <h4> Todo List ✔ </h4>
            <input className="searchbar"
            placeholder="입력하여 검색"
            
            value={search}
            onChange={onChangeSearch}
            />

            <div className="list_wrapper">
                {/* {
                    // 검색 기능 없이 map을 통해 데이터 출력
                    // todo : arr [{obj},{obj},{obj}]
                    // todo의 배열 객체를 map으로 가져와 하나씩 출력
                todo.map( (thisItem) => (
                <TodoItem
                    {...thisItem}
                    key = {thisItem.id}
                    id = {thisItem.id}
                    content = {thisItem.content}
                    isDone = {thisItem.isDone}
                    createDate = {thisItem.createDate}

                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
                    ))
                } */}

                {
                    // 검색기능 추가하여 데이터 출력
                    // getSearchResult : 검색어가 있으면 filter한 값 , 없으면 todo
                    getSearchResult().map((thisItem)=>
                        <TodoItem 
                        key={thisItem.id}
                        {...thisItem}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default TodoList;