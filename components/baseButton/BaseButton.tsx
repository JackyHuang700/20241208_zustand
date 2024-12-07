import React, { } from 'react'
import styles from '@/components/baseButton/BaseButton.module.css'
import classNames from 'classnames'

type BaseButtonProps = {
  children: React.ReactNode
  classType?: 'danger' | 'edit'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const BaseButton = (params: BaseButtonProps) => {

  const {
    classType,
    className,
    children,
    ...rest
  } = params

  const getClassName = () => {

    let _className = classNames(styles['btn'], className)

    if (classType) {
      switch (classType) {
        case 'danger':
          _className += ` ${styles['btn-delete']}`
          break;
        case 'edit':
          _className += ` ${styles['btn-edit']}`
          break;
        default:
          break;
      }
    }

    return _className
  }

  return (
    <button
      {...rest}
      className={getClassName()}
    >{children}</button>
  )
}

export default BaseButton
