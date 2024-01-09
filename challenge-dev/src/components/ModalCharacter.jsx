import styled from "styled-components";
import PropTypes from 'prop-types'
import { useRef } from "react";

const Background = styled.div`
    z-index: 5;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalWrapper = styled.div`
    width: auto;
    height: auto;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 10px;
    padding: 0 5px;
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
    font-size: 1.5rem;
`
const StatName = styled.span`
    color: #8bc34a;
    font-size: 2rem;
`
const PjName = styled.h1`
    text-decoration: underline;
`

export function ModalCharacter({character, isOpen, toggleModal}){
    const modalRef = useRef()

    const closeModal = e => {
        if(modalRef.current === e.target){
            toggleModal()
        }
    }
    return(
        <>
            {isOpen ? 
            (<Background ref={modalRef} onClick={e => closeModal(e)}>
                <ModalWrapper>
                    <ModalContent>
                        <CharacterImage src={character.image}/>
                        <div>
                            <PjName>{character.name}</PjName>
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