import Layout from '../components/layout'
import Head from 'next/head'
import unfetch from 'isomorphic-unfetch'
import Link from 'next/link'
import slug from 'slug'
function HomePage({characters}) {
  return (
    <Layout>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>The Rick and Morty</h1>
      <ul>
      {characters.results.map(character => (
      <li key={character.id}>
        <Link href={'/character/[slug]'} as={`/character/${slug(character.name)}-${character.id}`}>
            {character.name}
        </Link>
      </li>
      ))}
      
      </ul>
      <style jsx>{``}</style>
    </Layout>
  )
}

export async function getStaticProps() {
    // data fetching
    const res = await unfetch('https://rickandmortyapi.com/api/character')
    const characters = await res.json()
    return {
      props: {
        characters
      },
    }
  }

export default HomePage
