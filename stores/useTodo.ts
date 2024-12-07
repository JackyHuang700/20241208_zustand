import { create } from "zustand"
import { devtools, persist, createJSONStorage } from 'zustand/middleware'

const MOCK_ID = 'a5b60a25-8d5c-4bbe-bfcf-ff0e164a2c07'

export type ObjArrTodo = {
  id: string
  label: string
  isEdit: boolean

}

type UseTodo = {
  todo: ObjArrTodo[]
}

const useTodo = create<UseTodo>()(devtools(persist((set, get) => ({
  todo: [],
}), {
  name: 'todo-storage',
  storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
})))

export default useTodo

// check if the mock data is added
export const setAddTodoMockData = () => useTodo.setState(state => {
  const _getIsAddMockData = getIsAddMockData()
  const _result = _getIsAddMockData ? {...state} : {...state, todo: [...state.todo.concat(getMockData())] }
  return _result
})

export const setAddTodo = (label: ObjArrTodo['label']) => useTodo.setState(state => ({...state, todo: [...state.todo.concat({id: crypto.randomUUID(), label, isEdit: false})]}))

export const setDeleteTodo = (id: ObjArrTodo['id']) => useTodo.setState(state => ({...state, todo: state.todo.filter(c => c.id !== id)}))

export const setEditTodo = (id: ObjArrTodo['id'], isEdit: ObjArrTodo['isEdit']) => useTodo.setState(state => ({...state, todo: state.todo.map(c => c.id === id ? {...c, isEdit: isEdit} : c)}))

export const setTodoLabel = (id: ObjArrTodo['id'], label: ObjArrTodo['label']) => useTodo.setState(state => ({...state, todo: state.todo.map(c => c.id === id ? {...c, label} : c)}))

const getMockData = (): ObjArrTodo => {
  return {
    id: MOCK_ID,
    label: 'test to do',
    isEdit: false
  }
}

const getIsAddMockData = () => useTodo.getState().todo.map(c => c.id).includes(MOCK_ID)