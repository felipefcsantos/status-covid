import React, { useEffect, useState } from 'react'
import api from '@/api/api'
import IEstados from '@/interface/IEstados'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './BrasilScreen.module.scss'



export default function BrasilScreen() {
  const [estados, setEstados] = useState<IEstados[]>([{}])
  const [data, setData] = useState('')

  useEffect(() => {
    if (data !== '') {
      api
        .get(`/brazil/${data.replaceAll('-', '')}`)
        .then((response) => { setEstados(response.data.data) })
    } else {
      api
        .get('')
        .then((response) => { setEstados(response.data.data) })
    }

  }, [data])

  function limparData() {
    setData('')
  }


  return (
    <>
      <div className={styles.data}>
        <h2>Selecione uma data abaixo caso queira ver os dados de um dia específico:</h2>
        <div>
          <input type="date" value={data} onChange={(evento) => setData(evento.target.value)} />
          <button onClick={() => limparData()}>Limpar</button>
        </div>
      </div>
      <div className={styles.container}>
        <TableContainer sx={{ maxWidth: 800 }} component={Paper}>
          <Table aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell className={styles.titulo}>Estado</TableCell>
                <TableCell className={styles.titulo} align="center">Qtd. Casos</TableCell>
                <TableCell className={styles.titulo} align="center">Mortos</TableCell>
                <TableCell className={styles.titulo} align="center">Suspeitos</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {estados.map((estado) => (
                <TableRow
                  key={estado.uid}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {estado.state}
                  </TableCell>
                  <TableCell align="center">{parseInt(estado.cases).toLocaleString('pt-BR')}</TableCell>
                  <TableCell align="center">{parseInt(estado.deaths).toLocaleString('pt-BR')}</TableCell>
                  <TableCell align="center">{parseInt(estado.suspects).toLocaleString('pt-BR')}</TableCell>
                </TableRow>
              )
              )}
            </TableBody>
          </Table>
        </TableContainer>

      </div>
    </>
  )
}
