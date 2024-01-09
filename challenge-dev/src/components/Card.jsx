import styled from 'styled-components'
import PropTypes from 'prop-types'

const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  padding: 5px 4px 0px;
  border-radius: 10px;
  background: rgba(105, 0, 170, 0.6);
  font-size: 1.25rem;

  @media (max-width: 768px) {
    padding: 2px;
  }
`

const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`

const Name = styled.h3`
  margin: 2px;
  color: rgb(130, 255, 255);
  font-weight: bold;
`


export default function Card({character, toggleModal}){
    return(
        <>
            <DivCard onClick={() => toggleModal(character)}>
                <Image src={character.image} alt={character.name} />
                <Name>{character.name}</Name>
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