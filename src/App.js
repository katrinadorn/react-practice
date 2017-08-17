import React from 'react'
import Footer from './js/components/Footer'
import AddTodo from './js/containers/AddTodo'
import VisibleTodoList from './js/containers/VisibleTodoList'

const App = () => (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
)

export default App
