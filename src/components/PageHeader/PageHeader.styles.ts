import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    background: url('https://images.nasa.gov/images/global-header_bg.jpg');
    background-repeat: no-repeat;
    background-attachment: inherit;
    background-position: center;
    background-size: cover;
    top: 0;
    left: 0;
    height: 200px;
    width: 100vw;
    display: block;
`

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
`

export const SearchBox = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;
    align-self: center;
    margin-left: 3rem;
`
