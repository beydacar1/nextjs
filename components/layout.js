import Navigation from './navigation'
import Head from 'next/head'
function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Beyda Acar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>{children}</main>
    </div>
  )
}
export default Layout
