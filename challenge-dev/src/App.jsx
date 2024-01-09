import './App.css'
import { useState, useEffect } from 'react'
import { gql, useLazyQuery } from '@apollo/client'

import GridCharacters from './components/GridCharacters'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { ModalCharacter } from './components/ModalCharacter'

const Find_Characters = gql`
    query FindCharacter($pageToFilter: Int,$nameToSearch: String, $specieToFilter: String, $genderToFilter: String, $statusToFilter: String) {
        characters(page: $pageToFilter, filter: {name: $nameToSearch, species: $specieToFilter, gender: $genderToFilter, status: $statusToFilter}) {
        info {
            pages
            prev
            next
        }
        results {
            id
            name
            status
            gender
            species
            location {
              name
            }
            origin {
              name
            }
            image
        }
        }
    }
`

function App() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [specie, setSpecie] = useState("");
  const [status, setStatus] = useState("")

  const [isOpen, setIsOpen] = useState(false)
  const [charModal, setCharModal] = useState({})

  const toggleModal = (character) =>{
      if(!isOpen){ 
          setIsOpen(true)
          setCharModal(character)}
      else{
          setIsOpen(false)
          setCharModal({})
      }
  }

  const [getCharacters, {data, loading}] = useLazyQuery(Find_Characters);

  useEffect(() => {
    const variables = {variables: {}}
    variables.variables.pageToFilter = page
    search ? variables.variables.nameToSearch = search : null
    gender ? variables.variables.genderToFilter = gender : null
    specie ? variables.variables.specieToFilter = specie : null
    status ? variables.variables.statusToFilter = status : null
    getCharacters(variables)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, gender, page, specie, status]);


  
  return (
    <>
      <h1>Rick & Morty App</h1>
      <NavBar 
        search={search}
        specie={specie}
        gender={gender}
        status={status}
        setSearch={setSearch}
        setGender={setGender}
        setSpecie={setSpecie}
        setStatus={setStatus}
        setPage={setPage}
        />
      <ModalCharacter character={charModal} isOpen={isOpen} toggleModal={toggleModal}/>
      <GridCharacters data={data} loading={loading} toggleModal={toggleModal}/>
      <Footer page={page} setPage={setPage} data={data}/>
    </>
  )
}

export default App
