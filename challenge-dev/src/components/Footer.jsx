import styled from "styled-components"
import PropTypes from 'prop-types'

const DivFooter = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    wrap: 5px;
`
const PageButttons = styled.button`
    background: #6900AB;
    color: #71D0F5;
    width: auto;
    height: 2vw;
    margin: 0 1vw;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 20px;
`
const Pages = styled.p`
    font-size: 20px;
    font-weight: bold;
`
export default function Footer({page, setPage, data}){
    const prevButton = () =>{
        data.characters.info.prev ? setPage(data.characters.info.prev) : null
    }
    const nextButton = () =>{
        data.characters.info.next ? setPage(data.characters.info.next) : null
    }
    return(
        <DivFooter>
            <PageButttons onClick={prevButton}>Prev</PageButttons>
            <Pages>{page} / {data ? data.characters.info.pages : null}</Pages>
            <PageButttons onClick={nextButton}>Next</PageButttons>
        </DivFooter>
    )
}

Footer.propTypes = {
    page: PropTypes.number,
    setPage: PropTypes.func,
    data: PropTypes.object
}