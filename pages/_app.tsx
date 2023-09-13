import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from '../src/theme/GlobalStyle';
import favicon from '../public/favicon.ico'
import Header from '@/components/Header';

//este é um arquivo de configurações gerais, onde coloco tudo que é padrão em todo o projeto

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                {/* aqui adiciono a fonte Montserrat do Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
                {/* aqui adiciono o titulo do projeto */}
                <title>Dados COVID-19</title>
            </Head>
            {/* aqui adiciono os estilos padrões do projeto */}
            <GlobalStyle />
            {/* aqui adiciono o componente Header como padrão em todo o projeto */}
            <Header/>
            <Component {...pageProps} />
        </>)
}