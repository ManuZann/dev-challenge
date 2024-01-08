import Card from './Card'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useState } from 'react'
import { ModalCharacter } from './ModalCharacter'

const DivCharacters = styled.div`
    heigth: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
`
export default function GridCharacters({characters}){
    const [isOpen, setIsOpen] = useState(false)
    const [charModal, setCharModal] = useState({})
    const toggleModal = (character = {}) =>{
        if(!isOpen){ 
            setIsOpen(true)
            setCharModal(character)}
        else{
            setIsOpen(false)
            setCharModal({})
        }
    }

    const pjs = characters.results.map(char => <Card key={char.id} character={char} toggleModal={toggleModal}/>)
    return(
        <>
            <DivCharacters>
                {pjs}
                <ModalCharacter character={charModal} isOpen={isOpen} toggleModal={toggleModal}/>
            </DivCharacters>
        </>
    )
}

GridCharacters.propTypes = {
    characters: PropTypes.object
    }