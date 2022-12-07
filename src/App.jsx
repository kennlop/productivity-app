import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList';
import PomoClock from './components/PomoClock'

function App() {
  return (
    <body>
      <div className='container'>
        <div className='todo-app'>
          <TodoList className='todo-app'/>
        </div>
        <div className='pomo-app'>
          <PomoClock className='pomoClock'/>
        </div>
      </div>
    </body>
  );
}

export default App

