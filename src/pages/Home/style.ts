import styled from "styled-components";

export const HomeStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--grey4);

  section > header {
    width: 90%;
    margin: 0 auto;
    padding-top: 60px;
    text-align: left;
  }

  section > header > h1 {
    margin: 15px 0;
    line-height: 40px;
    color: var(--white);
  }

  section > header > h3 {
    margin: 20px 0;
    color: var(--white);
  }

  section > div {
    margin-top: 35px;
    display: flex;
    justify-content: center;
  }

  section > div > img {
    width: 300px;
    height: 300px;
  }

  .buttonDash {
    width: 100%;
    height: 50px;
    color: var(--white);
    background-color: var(--colorPrimary);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    text-decoration: none;
    margin-bottom: 10px;
  }

  .buttonDash:hover {
    background-color: var(--ColorPrimary2);
  }

  @media (min-width: 900px) {
    display: flex;
    justify-content: center;

    section {
      display: flex;
      justify-content: space-between;
      margin-top: 180px;
    }

    section > header {
      width: 40%;
      margin: 0 0 0 20px;
    }

    section > div {
      margin-top: 0;
      margin-right: 20px;
    }

    section > div > img {
      width: 450px;
      height: 450px;
    }
  }
`;
