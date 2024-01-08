import styled from 'styled-components'
import PropTypes from 'prop-types'

const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    padding: 2px 4px 0px;
    border-radius: 10px;
    color: black;
    background: white;
`
const Image = styled.img`
    width: 250px;
    heigth: 250px;
    border-radius: 10px
`


export default function Card({character, toggleModal}){
    

    return(
        <>
            <DivCard onClick={() => toggleModal(character)}>
                <Image src={character.image} alt={character.name} />
                <p>{character.name}</p>
            </DivCard>
        </>
    )
}

Card.propTypes = {
    character: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }),
    toggleModal: PropTypes.func
}