import styles from './Header.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter()
    return (
        <header className={styles.header}>
            <div>
                <Image
                    src="/logo.png"
                    width={80}
                    height={80}
                    alt="Logo"
                    className={styles.logo}
                    onClick={() => router.push("/")}
                />
                <h1>COVID-19</h1>
            </div>
            <div>
                <button className={styles.botao} onClick={() => router.push('formulario')}>Enviar Formulário</button>
            </div>
        </header>
    )
}
