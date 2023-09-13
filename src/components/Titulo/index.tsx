import React from 'react'
import styles from './Titulo.module.scss'

interface Props{
  children: ReactNode
}

export default function Titulo({children}: Props) {
  return (
    <h1 className={styles.titulo}>{children}</h1>
  )
}
