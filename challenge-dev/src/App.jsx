import './App.css'
import { gql, useQuery } from '@apollo/client'
import GridCharacters from './components/GridCharacters'

const characters = gql`
  query {
    characters(page: 1) {
      results {
        id,
        name,
        status,
        gender,
        species,
        location {
          name
        },
        origin {
          name
        },
        image
      }
    }
  }
`

function App() {
  const {data, loading} = useQuery(characters)
  if(loading) return <p>Cargando Personajes</p>
  return (
    <>
      <h3>Rick And Morty App</h3>
      <GridCharacters characters={data.characters}/>
    </>
  )
}

export default App
