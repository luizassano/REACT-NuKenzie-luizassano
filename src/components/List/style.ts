import styled from "styled-components";

export const ListStyle = styled.section`
    width: 90%;
    margin: 0 auto;

    .boxFilter{
        width: 100%;
    }

    .boxFilter > h2 {
        width: 100%;
        display: flex;
        margin: 15px 0 10px 0;
    }

    .boxFilter > div {
        width: 100%;
        display: flex;
        gap: 15px;
        margin-bottom: 15px;
    }

    .FilterButton {
        width: 70px;
        height: 30px;
        border: 1px solid var(--colorPrimary);
        border-radius: 6px;
        background-color: var(--colorPrimary);
        color: var(--white);
    }

    .FilterButton:hover {
        border: 1px solid var(--ColorPrimary2);
        background-color: var(--ColorPrimary2);
    }

    .filterButtonNo {
        width: 70px;
        height: 30px;
        border: 1px solid var(--grey2);
        border-radius: 6px;
        background-color: var(--grey2);
        color: var(--grey4);
    }

    .filterButtonNo:hover {
        border: 1px solid var(--grey4);
        background-color: var(--grey4);
        color: var(--white);
    }

    ul > h3 {
        display: flex;
        text-align: left;
        line-height: 25px;
        margin-bottom: 10px;
    }

    .boxNoCard {
        margin-bottom: 10px;
    }

    .boxNoCard > img{
        width: 100%;
        display: flex;
        height: 128px;
    }

    @media (min-width: 900px) {
        width: 40%;
        margin: 0;

        .boxFilter{
            max-width: 300px;
        }

        .boxFilter > h2 {
            margin: 0px 0 20px 0;
        }

        .boxFilter > div {
            width: 100%;
            display: flex;
            gap: 20px;
            margin-bottom: 25px;
        }
    }

`