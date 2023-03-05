import Layout from '../components/layout'
import Head from 'next/head'
function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1 className='title'>Welcome to Next.js!</h1>

      <style jsx>{``}</style>
    </Layout>
  )
}

export default HomePage
