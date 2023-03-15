import styled from "styled-components";

export const TotalMoneyStyle = styled.div`
    width: 90%;
    height: 80px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid var(--grey2);

    div {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }

    div > h2 {
        color: var(--grey4);
    }

    div > p {
        color: var(--colorPrimary);
    }

    h3 {
        width: 90%;
        margin: 0 auto;
        display: flex;
        color: var(--grey3);
    }

    @media (min-width: 900px) {
        height: 100px;
        margin-left: 0;
    }

`