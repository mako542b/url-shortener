import { useState } from 'react'
import Header from './Header'
import FirstSection from './FirstSection'
import Form from './Form'
import SecSection from './SecSection'
import ThirdSection from './ThirdSection'
import Boost from './Boost'
import Footer from './Footer'
import LinksContainer from './LinksContainer'
import { useLocalStorage } from 'usehooks-ts'

export interface linkInterface {
  code: string
  shortLink: string
  originalLink: string
  index: number
}

function App() {

  const [links, setLinks] = useLocalStorage<linkInterface[]>('shortened-links',[])

  return (
    <div className='font-main text-lg' data-testid='main-div'>
      <Header/>
      <FirstSection/>
      <Form setLinks={setLinks} links={links}/>
      {links && links?.length > 0 && <LinksContainer links={links} setLinks={setLinks}/>}
      <SecSection/>
      <ThirdSection/>
      <Boost/>
      <Footer/>
    </div>
  )
}

export default App
