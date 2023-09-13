import React from 'react'
import OpcoesHome from '@/components/OpcoesHome'
import styles from './HomeScreen.module.scss'
import Titulo from '@/components/Titulo'

// aqui eu adiciono o que realmente será mostrado na página

export default function HomeScreen() {

  // apenas chamo os componentes necessários passando as props pedidaspara cada um
  return (
    <div className={styles.container}>
      <Titulo>Escolha de onde deseja ver os dados sobre a COVID-19:</Titulo>
      <div className={styles.opcoes}>
        <OpcoesHome
          src='/brasil.png'
          alt='Mapa do Brasil'
          path='/brasil'
          itens={[{
            titulo: 'Ver de todos os estados',
            pathItem: '/brasil'
          }, {
            titulo: 'Pesquisar por estado',
            pathItem: '/estados'
          }]}
        >Brasil</OpcoesHome>
        <OpcoesHome
          src='/mundo.png'
          alt='Desenho do mundo'
          path='/mundo'
          itens={[{
            titulo: 'Pesquisar por país',
            pathItem: '/mundo'
          }, {
            titulo: '',
            pathItem: ''
          }]}
        >Mundo</OpcoesHome>
      </div>
    </div>
  )
}