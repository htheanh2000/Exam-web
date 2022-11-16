import type { NextPage } from 'next'
import Hero from '../components/homepage/hero'
import NavBar from '../components/nav'
const Home: NextPage = () => {
  return (
    <div  >
      <NavBar />
      <section id='hero-section'>
        <Hero/>
      </section>
    </div>
  )
}

export default Home
