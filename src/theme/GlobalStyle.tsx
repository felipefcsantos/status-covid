export default function GlobalStyle() {
    return (
      // aqui adiciono os estilos globais de toda  aplicação
      <style global jsx>{`
        body{
          background: linear-gradient(90deg, #000000 0%, #1E0B61 100%);
          font-family: Montserrat, sans-serif;
          margin: 2rem;
        }
      `}
      </style>
    )
  }