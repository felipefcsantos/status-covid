import React, { useState } from 'react'
import Titulo from '@/components/Titulo'
import styles from './FormularioScreen.module.scss'

// aqui eu adiciono o que realmente será mostrado na página

export default function FormularioScreen() {
      // defino os estados iniciais utilizados no componente (os que possuem <> são porque defino os types da interface externa para aquele estado)
    const [estado, setEstado] = useState('')
    const [casos, setCasos] = useState('')
    const [confirmados, setConfirmados] = useState('')
    const [mortos, setMortos] = useState('')
    const [recuperados, setRecuperados] = useState('')
    const [data, setData] = useState('')

    // função para criar o JSON e exibir uma mensagem na tela com ele
    function enviar() {
        alert(
            `{data: {
                "state": "${estado}",
                "cases": ${casos},
                "confirmed": ${confirmados},
                "deaths": ${mortos},
                "recovered": ${recuperados},
                "updated_at": "${data.replaceAll('-','')}"
              }}`
        )
    }

    return (
        <div className={styles.container} onSubmit={() => enviar()}>
            <Titulo>Preencha o formulário abaixo:</Titulo>
            <form className={styles.formulario}>
                <label>Estado</label>
                <select required value={estado} onChange={(evento => setEstado(evento.target.value))}>
                    {/* escolhi fazer a lista na mão para que nesta tela não tenha nenhuma requisição HTTP */}
                    <option value=''>Selecione um estado</option>
                    <option value='AC'>AC</option>
                    <option value='AL'>AL</option>
                    <option value='AM'>AM</option>
                    <option value='AP'>AP</option>
                    <option value='BA'>BA</option>
                    <option value='CE'>CE</option>
                    <option value='DF'>DF</option>
                    <option value='ES'>ES</option>
                    <option value='GO'>GO</option>
                    <option value='MA'>MA</option>
                    <option value='MG'>MG</option>
                    <option value='MS'>MS</option>
                    <option value='MT'>MT</option>
                    <option value='PA'>PA</option>
                    <option value='PB'>PB</option>
                    <option value='PE'>PE</option>
                    <option value='PI'>PI</option>
                    <option value='PR'>PR</option>
                    <option value='RJ'>RJ</option>
                    <option value='RN'>RN</option>
                    <option value='RO'>RO</option>
                    <option value='RR'>RR</option>
                    <option value='RS'>RS</option>
                    <option value='SC'>SC</option>
                    <option value='SE'>SE</option>
                    <option value='SP'>SP</option>
                    <option value='TO'>TO</option>
                </select>
                <label>Quantidade de casos</label>
                <input type='number' value={casos} required onChange={(evento => setCasos(evento.target.value))} />
                <label>Casos confirmados</label>
                <input type='number' required value={confirmados} onChange={(evento => setConfirmados(evento.target.value))} />
                <label>Mortos</label>
                <input type='number' required value={mortos} onChange={(evento => setMortos(evento.target.value))} />
                <label>Recuperados</label>
                <input type='number' required value={recuperados} onChange={(evento => setRecuperados(evento.target.value))} />
                <label>Data</label>
                <input type='date' required value={data} onChange={(evento => setData(evento.target.value))} />
                {/* como o botão é do tipo submit, toda ver que for clicado, verificará se todos os campos obrigatórios foram preenchidos e aí chama a função enviar() */}
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
