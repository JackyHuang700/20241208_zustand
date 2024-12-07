import React from 'react'
import styles from '@/components/todoList/TodoList.tsx'
import useTodo, { ObjArrTodo, setDeleteTodo, setEditTodo } from '@/stores/useTodo'

import TotoLabel from '@/components/todoLabel/TodoLabel'
import BaseButton from '@/components/baseButton/BaseButton'

const TodoList = () => {
  const todo = useTodo(c => c.todo)

  const onOpenEditMode = (id: ObjArrTodo['id']) => {
    setEditTodo(id, true)
  }

  return (
    <ul>
      {
        todo.map(c => {
          return (
            <li key={c.id} className={'flex justify-start items-center gap-1 my-2'}>

              <TotoLabel
                id={c.id}
                label={c.label}
                isEdit={c.isEdit}
              />

              {
                c.isEdit ? null : (<div className='flex justify-center items-center ml-auto gap-2'>
                  <BaseButton onClick={() => onOpenEditMode(c.id)} classType='edit'>
                    <span>Edit</span>
                  </BaseButton>
                  <BaseButton onClick={() => setDeleteTodo(c.id)} classType='danger'>
                    <span>Delete</span>
                  </BaseButton>
                </div>)
              }

            </li>
          )
        })
      }
    </ul>
  )
}

export default TodoList
