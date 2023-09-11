import styled from "styled-components";

export const Container = styled.div`
    margin: 0;
    box-sizing: border-box;

    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    /* background-color: #1c1c1c; */

`
export const Form = styled.div`
    height: 30vh;
    padding: 100px 25px;

    gap: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 10px;

    background-color: #fff;

    border-radius: 10px;

    h1{
        margin-top: 10px;
        color: #1c1c1c;
    }

    input, button{
        padding: 15px;
        font-size: 18px;
        border: none;
        outline: none;
        border-radius: 7px;
        color: #000;
        background-color: #c1c1c1;
        width: 100%;
        
    }
    .input-small{
        width: 50%;
    }
    .input-group{
        width: 100%;
        padding: 10px;
        gap: 20px;
        display: flex;
    }

    .button-group{
        width: 100%;
        padding: 10px;
        gap: 20px;
        display: flex;
        justify-content: center;
    }
    
    button{
        cursor: pointer;
        letter-spacing: .6px;
        font-weight: bold;
        transition: 1s;
        
    }
    button:hover{
        color: #fff;
        font-weight: bold;
        opacity: .9;
    }
`