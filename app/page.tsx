
import React from 'react'

import Demo from '@/components/demo/Demo.tsx'
import Todo from '@/components/todo/Todo'


export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen '>
      <div className='max-w-[350px] w-full'>
        <Todo />
        {
          false && <Demo />
        }
      </div>
    </div>
  );
}
