import styled from '@emotion/styled';

export const MainDiv = styled.div`
    width: 461px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 20px 10px 20px;

    text-align: right;
    border: 3px solid darkolivegreen;
    border-radius: 8px;
    color: darkolivegreen;

    h2 {
        text-align: center;
    }
    label {
        font-weight: 700;
    }
    input {
        height: 22px;
        border: 1px solid gray;
        border-radius: 3px;
    }
    button {
        padding: 11px;

        font-weight: 700;
        font-size: 18px;
        
        background-color: transparent;
        border: 0px solid gray;
        border-radius: 3px;
        background-color: lightgrey;
        color: darkolivegreen;
        transition: all 200ms linear;
        
        :hover {
            cursor: pointer;
            color: lightgrey;
            background-color: darkolivegreen;
        }  
        :active {
            scale: 0.9;
        }    
    }
    form button {
        margin-top: 5px;
        margin-bottom: 10px;
    }
    ul {
        padding: 0;
        margin: 10px 0 0 0;
    }
    li {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: baseline;
        
        width: 460px;
        margin-top: 3px;

        span:first-of-type {
            margin-right:auto;
        }
        span:last-of-type {
            margin-right:10px;
        }
    }
`;