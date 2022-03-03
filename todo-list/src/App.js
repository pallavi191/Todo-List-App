import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return ( 
    <> 
    <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </>
  );
}

export default App;

























// import logo from './logo.svg';
// import './App.css';
// import Header from './MyComponents/Header';
// import {Todos} from './MyComponents/Todos';
// import {Footer} from './MyComponents/Footer';
// import {AddTodo} from './MyComponents/AddTodo';
// import React, { useState } from 'react';

// function App() {

//  //DeleteTodo 
//   const onDelete = (todo) =>{
//     console.log("I am onDelete od todo", todo);

//     //Deleting this way in react does not work
//     // let index = todos.indexOf(todo);
//     // todos.splice(index, 1);

//     setTodos(todos.filter((e)=>{
//       return e!==todo;
//     }))
//   }
// //addTodo
//   const addTodo = (title, desc) => {
//     console.log("I am adding this todo", title, desc)
//     let sno;
//     if (todos.length === 0) {
//       sno = 0;
//     }
//     else {
//       sno = todos[todos.length - 1].sno + 1;
//     }
//     const myTodo = {
//       sno: sno,
//       title: title,
//       desc: desc,
//     }
//     setTodos([...todos, myTodo]);
//     console.log(myTodo);
//   }

//   const [todos, setTodos] = useState([
//     {
//     sno: 1,
//     title: "Go to the market",
//     description: "You need to go to the market to get this job done" 
//   },
//     {
//     sno: 2,
//     title: "Go to the mall",
//     description: "You need to go to the mall to get this job done" 
//   },
//     {
//     sno: 1,
//     title: "Go to the ghat",
//     description: "You need to go to the ghat to get this job done" 
//   }
// ]);
//   return (
//     <>
//       <Header title="My Todos List" searchBar = {true}/>
//       <AddTodo addTodo={addTodo} />
//       <Todos todos = {todos} onDelete = {onDelete}/>
//       <Footer />
//     </>
//   );
// }

// export default App;
