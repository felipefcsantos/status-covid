import styles from './Header.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'

// este é o componente Header, padrão em todas as páginas

export default function Header() {
    // aqui inicializo o Hook do Next, useRouter, para poder realizar a navegaçào entre as páginas
    const router = useRouter()
    return (
        <header className={styles.header}>
            <div>
                {/* aqui importo o logo que defini utilizando atag Image do proprio Next por questão de performance */}
                <Image
                    src="/logo.png"
                    width={80}
                    height={80}
                    alt="Logo"
                    className={styles.logo}
                    // aqui defino a ação de click para retonar a Home
                    onClick={() => router.push("/")}
                />
                <h1>COVID-19</h1>
            </div>
            <div>
             {/* aqui defino a ação de click para direcionar o usuário para a tela de formulário*/}
                <button className={styles.botao} onClick={() => router.push('formulario')}>Enviar Formulário</button>
            </div>
        </header>
    )
}
