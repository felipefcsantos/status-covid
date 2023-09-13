import React from 'react'
import Image from 'next/image'
import styles from './OpcoesHome.module.scss'
import { useRouter } from 'next/router'
import { List } from '@mui/material'
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

// utilizo a interface para definir os types das props que o componente precisa

interface Props {
  children: React.ReactNode,
  src: string,
  alt: string,
  path: string,
  itens: [{
    titulo: string,
    pathItem: string
  }, {
    titulo: string,
    pathItem: string
  }]

}
export default function OpcoesHome({ children, src, alt, path, itens }: Props) {

  // utilizo o hook useState para controlar o estado da opção de abrir e fecha o menu
  const [open, setOpen] = React.useState(false);

  // função para alterar o estado open
  const handleClick = () => {
    setOpen(!open);
  };

  // hook para navegar entre páginas
  const router = useRouter()

  // aqui escolhi a utilização de uma lista suspensa do MaterialUI qu já vem configurada e pronta
  return (
    <List >
      {/* alguns componentes do MaterilUI aceitam apenas alguns parametros de estilização por CSS inline */}
      <ListItemButton onClick={handleClick} sx={{background: 'whitesmoke', borderRadius: '10px'}} className={styles.listaContainer}>
        <ListItemIcon>
          <Image
            src={src}
            alt={alt}
            height={80}
            width={80}
          />
        </ListItemIcon>
        <h2>{children}</h2>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {itens?.map((item) => {
            // aqui faço uma condição para caso o componente tenha apenas 1 opção na lista
            if (item.titulo !== '') {
              return (
                <>
                  <ListItemButton className={styles.listaItem} sx={{background: 'whitesmoke', borderRadius: '10px'}} onClick={() => router.push(item.pathItem)}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary={item?.titulo} />
                  </ListItemButton>
                </>
              )
            }


          })}
        </List>
      </Collapse>
    </List>
  )
}
