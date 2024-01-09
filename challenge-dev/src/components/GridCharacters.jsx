import Card from './Card'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CardsSkeleton from './skeletons/CardsSkeleton'

const DivCharacters = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    margin: 5px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
        gap: 10px;
    }
`
export default function GridCharacters({data, loading, toggleModal}){    
    if(loading) return <CardsSkeleton/>
    if(data){
        const pjs = data.characters.results.map(char => <Card key={char.id} character={char} toggleModal={toggleModal}/>)    
        return(
            <>
                <DivCharacters>
                    {pjs}
                </DivCharacters>
            </>
    )}
}

GridCharacters.propTypes = {
    data: PropTypes.shape({
        characters: PropTypes.object
    }),
    loading: PropTypes.bool,
    toggleModal: PropTypes.func
}