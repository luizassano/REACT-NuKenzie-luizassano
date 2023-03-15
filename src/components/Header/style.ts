import styled from "styled-components";

export const HeaderStyle = styled.div`
    header {
        height: 60px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    header > nav {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .buttonHeader {
        width:  55px;
        height: 35px;
        color: var(--grey4);
        background-color: var(--grey2);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        text-decoration: none;
    }
    
    .buttonHeader:hover {
        color: var(--grey1);
        background-color: var(--grey4);
    }

    .buttonHeader:active {
        color: var(--grey1);
        background-color: var(--colorPrimary);
    }

    @media (min-width: 900px) {

        header > nav {
            width: 75%;
            margin: 0 auto;
        }
        
    }

`