import React, { useEffect, useState } from 'react'
import styles from '@/components/todoLabel/TodoLabel.module.css'
import { ObjArrTodo, setEditTodo, setTodoLabel } from '@/stores/useTodo'

type TodoLabelProps = {
  id: ObjArrTodo['id']
  label: ObjArrTodo['label']
  isEdit: ObjArrTodo['isEdit']
}

const TodoLabel = ({
  id,
  label,
  isEdit
}: TodoLabelProps) => {

  const [strLabel, setStrLabel] = useState(label);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStrLabel(e.target.value)
  }

  const onComFirmEditTodo = () => {
    setTodoLabel(id, strLabel)
    onCancelEditTodo()
  }

  const onCancelEditTodo = () => {
    setEditTodo(id, false)
    setStrLabel(label)
  }

  useEffect(() => {
    setStrLabel(label)
  }, [label]);

  return (
    <div>
      {
        isEdit ? (
          <div className="flex justify-between items-center">
            <input type="text" value={strLabel} onChange={onChange} className='text-black' />
            <div className='ml-3 flex justify-between items-center  gap-2'>
              <button onClick={onComFirmEditTodo}>確認</button>
              <button onClick={onCancelEditTodo}>取消</button>
            </div>

          </div>
        ) : (
          <p className={''}>{label}</p>
        )
      }
    </div>
  )
}

export default TodoLabel
