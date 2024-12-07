'use client'
import React, { useRef, useState } from 'react'
import styles from '@/components/addTodo/AddTodo.module.css'
import { setAddTodo } from '@/stores/useTodo';

import BaseButton from '@/components/baseButton/BaseButton'

const AddTodo = () => {

  const [strSearch, setStrSearch] = useState('');

  const refAddTodo = useRef<HTMLInputElement | null>(null)

  const setResetStrSearch = () => setStrSearch('')

  const onTodoLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStrSearch(e.target.value)
  }

  const onAddTodo = () => {
    if (strSearch === '' || strSearch === null || strSearch === undefined) return

    setAddTodo(strSearch)
    setResetStrSearch()
    refAddTodo.current?.focus()
  }

  return (
    <div className='mb-4'>
      <input type="text" className={styles['input-style']} value={strSearch} onChange={onTodoLabel}
        ref={refAddTodo}
      />
      <BaseButton onClick={onAddTodo} className='ml-3'>
        <span>Add</span>
      </BaseButton>
    </div>
  )
}

export default AddTodo
