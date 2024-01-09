import PropTypes from 'prop-types'
import styled from 'styled-components';
import { useState } from 'react';

const DivNavbar = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const DivFilters = styled.div`
    display: flex
`
const AppSelect = styled.select`
    background: #6900AB;
    width: 25vw;
    height: 2vw;
    border-radius: 15px;
    margin: 0 10px;
    color: #71D0F5;
    font-weight: bold;
    font-size: 1.25rem;
    padding: 0 20px;
    border: 1px black;
`
const FormButtons = styled.button`
    background: #6900AB;
    color: #71D0F5;
    width: auto;
    height: 2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.25rem;
`
const SearchForm = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    color: #71D0F5;
    margin-bottom: 10px;
`
const SearchBar = styled.input`
    background: #6900AB;
    width: 90%;
    height: 2vw;
    border-radius: 15px;
    margin: 0 15px 0 15px;
    color: #71D0F5;
    font-weight: bold;
    font-size: 20px;
    padding: 0 20px;
    border: 1px black;
`
export default function NavBar({search, setSearch, gender, setGender, specie, setSpecie, setPage, status, setStatus}){
    const [busqueda, setBusqueda] = useState(search)
    const searchChange = () => {
        setSearch(busqueda)
    }
    const genderChange = e => {
        e.target.value ? setGender(e.target.value) : setGender("")
        setPage(1)
    }
    const speciesChange = e => {
        e.target.value ? setSpecie(e.target.value) : setSpecie("")
        setPage(1)
    }
    const statusChange = e => {
        e.target.value ? setStatus(e.target.value) : setStatus("")
        setPage(1)
    }
    const resetFilter = () => {
        setSearch("")
        setGender("")
        setSpecie("")
        setStatus("")
        setBusqueda("")
        setPage(1)
    }
    return(
        <DivNavbar>
            <SearchForm >
                <SearchBar type="text" value={busqueda} onChange={e => setBusqueda(e.target.value)} />
                <FormButtons onClick={searchChange}>Search</FormButtons>
            </SearchForm>
            <DivFilters>
                <AppSelect name="gender" id="gender" value={gender} onChange={e => genderChange(e)}>
                    <option value="">Gender...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknown">Unknown</option>
                </AppSelect>
                <AppSelect name="specie" id="specie" value={specie} onChange={e => speciesChange(e)}>
                    <option value="">Species...</option>
                    <option value="Human">Human</option>
                    <option value="Alien">Alien</option>
                    <option value="Unknown">Unknown</option>
                </AppSelect>
                <AppSelect name="status" id="status" value={status} onChange={e => statusChange(e)}>
                    <option value="">Status...</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="Unknown">Unknown</option>
                </AppSelect>
                <FormButtons onClick={resetFilter}>Reset Filters</FormButtons>
            </DivFilters>
        </DivNavbar>
    )
}

NavBar.propTypes = {
    setSearch: PropTypes.func,
    setGender: PropTypes.func,
    setSpecie: PropTypes.func,
    setStatus: PropTypes.func,
    setPage: PropTypes.func,
    search: PropTypes.string,
    gender: PropTypes.string,
    specie: PropTypes.string,
    status: PropTypes.string
}