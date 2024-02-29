// _app.js

import Head from 'next/head'
import '../styles/styles.css' // CSSファイルのインポート

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='stylesheet' href='/styles.css' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
