'use client'
import React, { useEffect } from 'react'
import { setAddTodoMockData } from '@/stores/useTodo'

import AddTodo from '@/components/addTodo/AddTodo'
import TodoList from '@/components/todoList/TodoList'

const Todo = () => {

  useEffect(() => {
    setAddTodoMockData()
  }, []);

  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  )
}

export default Todo
