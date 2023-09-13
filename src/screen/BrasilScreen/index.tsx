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

// aqui eu adiciono o que realmente será mostrado na página

export default function BrasilScreen() {
  // defino os estados iniciais utilizados no componente (os que possuem <> são porque defino os types da interface externa para aquele estado)
  const [estados, setEstados] = useState<IEstados[]>([])
  const [data, setData] = useState('')

  // o hook useEffect é utilizado para requisições assíncronas. Só sai do Hook quando a requisição termina
  useEffect(() => {
    // utilizo a condição para que no mesmo hook seja possível criar a tabela com ou sem data selecionada
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

// crio uma função para zerar a data e a tabela voltar com os ultimos dados
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
        {/* utilizo a tabela do próprio MateriaUI por facilidade */}
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
                  key={estado.uf}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {estado.state}
                  </TableCell>
                  {/* o toLocaleString é para definir o padrão de exibição dos números como 000.000.000  */}
                  <TableCell align="center">{estado.cases.toLocaleString('pt-BR')}</TableCell>
                  <TableCell align="center">{estado.deaths.toLocaleString('pt-BR')}</TableCell>
                  <TableCell align="center">{estado.suspects.toLocaleString('pt-BR')}</TableCell>
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
