import React, { useEffect, useState } from 'react'
import Titulo from '@/components/Titulo'
import IPais from '@/interface/IPais'
import api from '@/api/api'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './MundoScreen.module.scss'

export default function MundoScreen() {
  const [pais, setPais] = useState('')
  const [dados, setDados] = useState<IPais>()

  useEffect(() => {
    api.get(`/${pais}`)
      .then((response) => setDados(response.data.data))
  }, [pais])
  return (
    <div className={styles.container}>
      <Titulo>Digite abaixo o país que deseja pesquisar:</Titulo>
      <input type="text" placeholder='Escreva o nome do país em inglês' value={pais} onChange={(evento) => setPais(evento.target.value)} />
      <div className={styles.tabela}>
        {dados?.country != null
          ? <TableContainer sx={{ maxWidth: 600 }} component={Paper}>
            <Table aria-label="simple table">
              <TableHead >
                <TableRow>
                  <TableCell className={styles.titulo}>País</TableCell>
                  <TableCell className={styles.titulo} align="center">Confirmados</TableCell>
                  <TableCell className={styles.titulo} align="center">Mortos</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {dados?.country}
                  </TableCell>
                  <TableCell align="center">{parseInt(dados?.confirmed).toLocaleString('pt-BR')}</TableCell>
                  <TableCell align="center">{parseInt(dados?.deaths).toLocaleString('pt-BR')}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          : ''
        }
      </div>

    </div>
  )
}
