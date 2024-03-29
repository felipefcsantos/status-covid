import React, { useState, useEffect } from 'react'
import Titulo from '@/components/Titulo'
import styles from './EstadosScreen.module.scss'
import api from '@/api/api'
import IEstados from '@/interface/IEstados'
import IEstado from '@/interface/IEstado'
import Image from 'next/image'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// aqui eu adiciono o que realmente será mostrado na página

export default function EstadoScreen() {
      // defino os estados iniciais utilizados no componente (os que possuem <> são porque defino os types da interface externa para aquele estado)
    const [uf, setUf] = useState<IEstados[]>([])
    const [estado, setEstado] = useState<IEstado>()

    // o hook useEffect é utilizado para requisições assíncronas. Só sai do Hook quando a requisição termina
    useEffect(() => {
        api.get('')
            .then((response) => setUf(response.data.data))
    }, [])

    // organizo a lista vinda da API para ordem alfabética
    const listaOrdenada = []
    listaOrdenada.push(uf.map((estado) => (
        estado.uf
    )).sort())

    // função com objetivo de realizar a chamada para a API solicitando dados do estado escolhido
    function estadoEscolhido(estado: string) {
        api.get(`/brazil/uf/${estado.toLowerCase()}`)
            .then((response) => setEstado(response.data))
    }

    return (
        <>
            <div className={styles.container}>
                <Titulo>Escolha o estado que deseja abaixo:</Titulo>
                {/* utilizo o onChange para que toda vez que o select for alterado ele faz uma nova requisição com o estado escolhido*/}
                <select className={styles.select} onChange={(evento) => estadoEscolhido(evento.target.value)}>
                    <option value=''>Selecione o estado</option>
                    {listaOrdenada[0].map((estado) => (
                        <option value={estado} key={estado}>
                            {estado}
                        </option>
                    ))}
                </select>
            </div>

            {estado?.uf !== undefined
                ? <div className={styles.item}>
                    {/* adiciono a bandeira especifica do estado que está na pasta public */}
                    <Image
                        src={`/bandeiras-br/imagens/${estado?.uf}.png`}
                        alt='Bandeira do estado escolhido'
                        height={124}
                        width={220}
                    />
                    <h1>{estado?.state}</h1>
                    {/* utilizo a tabela do prórpio MaterialUI */}
                    <TableContainer sx={{ maxWidth: 600 }} component={Paper}>
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
                                    <TableRow
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
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>
                : ''
            }


        </>
    )
}
