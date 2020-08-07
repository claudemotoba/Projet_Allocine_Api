import styled from 'styled-components'

const StyledSearch = styled.div`
    display: flex;
    width: calc(23.25%*4);
    margin-left: 4%;
    flex-wrap: wrap;
    .search{
        max-width: 290px;
        height: 250px;
        box-sizing: border-box;
        color: white;
    }

    @media only screen and (max-width: 900px) {
        display: flex;
        height: 130px;
        h3{
            font-size: 13px;
        }
        .search{
            max-width: 25%;
            height: 130px;
            box-sizing: border-box;
            /* border: solid red 1px; */
            padding: 0;
            color: white;
        }
    }
`

export default StyledSearch