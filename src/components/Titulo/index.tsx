import React from 'react'
import styles from './Titulo.module.scss'

// escolhi criar um componente de titulo padronizado, já que é utilizado em praticamente todas as páginas
// utilizo a interface para definir os types das props que o componente precisa
interface Props{
  children: React.ReactNode
}

export default function Titulo({children}: Props) {
  return (
    <h1 className={styles.titulo}>{children}</h1>
  )
}
