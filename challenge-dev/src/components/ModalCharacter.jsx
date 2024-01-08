import styled from "styled-components";
import PropTypes from 'prop-types'

const Background = styled.div`
    z-index: 2;
    width: 100%;
    height: auto;
    position: fixed;
`

const ModalWrapper = styled.div`
    width: 65%;
    height: auto;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 10px;
    position: absolute;
    top: 4vw;
    left: 4vw;
`
const ModalContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
const CharacterImage = styled.img`
    border-radius: 10px;
    background: white;
    margin: 10px;
    width: 26vw;
`
const StatInfo = styled.p`
    font-weight: bold;
    font-size: 25px;
`
const StatName = styled.span`
    color: #8bc34a;
    font-size: 30px
`

export function ModalCharacter({character, isOpen, toggleModal}){
    return(
        <>
            {isOpen ? 
            (<Background onClick={() => toggleModal()}>
                <ModalWrapper>
                    <ModalContent>
                        <CharacterImage src={character.image}/>
                        <div>
                            <h1>{character.name}</h1>
                            <div>
                                <StatInfo><StatName>Status: </StatName>{character.status}</StatInfo>
                                <StatInfo><StatName>Gender: </StatName>{character.gender}</StatInfo>
                                <StatInfo><StatName>Specie: </StatName>{character.species}</StatInfo>
                                <StatInfo><StatName>Location: </StatName>{character.location.name}</StatInfo>
                                <StatInfo><StatName>Origen: </StatName>{character.origin.name}</StatInfo>
                            </div>
                        </div>
                    </ModalContent>
                </ModalWrapper>
            </Background> )
            : null}
        </>
    )
}

ModalCharacter.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    character: PropTypes.object
}