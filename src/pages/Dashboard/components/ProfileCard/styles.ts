import styled from 'styled-components'

export const ProfileCardContainer = styled.section`
  display: flex;
  align-items: center;
  max-width: 54rem;
  max-height: 13.25rem;
  width: 100%;
  background: var(--base-profile);
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem 2.5rem;
  gap: 2rem;
  margin-bottom: 4.5rem;

  img {
    border-radius: 8px;
    width: 9.25rem;
    height: 9.25rem;
  }
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 38.25rem;
  width: 100%;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-weight: bold;
      font-size: 1.5rem;
      line-height: 130%;
      color: var(--base-title);
    }

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: border 0.1s;
      gap: 0.5rem;
      height: 1.25rem;

      svg {
        height: 0.75rem;
        width: 0.75rem;
        color: var(--blue);
      }

      :hover {
        border-bottom: 1px solid var(--blue);
      }

      span {
        font-weight: bold;
        font-size: 0.75rem;
        text-decoration: none;
        text-transform: uppercase;
        color: var(--blue);
        line-height: 0;
      }
    }
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    color: var(--base-text);
    margin-top: 0.5rem;
    flex: 1;
  }

  footer {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1.5rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: var(--base-label);
      }

      h3 {
        font-weight: 400;
        font-size: 1rem;
        color: var(--base-subtitle);
      }
    }
  }
`
