import styled from 'styled-components'

export const PostCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: var(--base-profile);
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;
  width: 100%;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: border 0.2s;
      height: 1.25rem;

      :hover {
        border-bottom: 1px solid var(--blue);
      }

      svg {
        color: var(--blue);
        height: 0.75rem;
        width: 0.75rem;
      }

      span {
        font-weight: bold;
        font-size: 0.75rem;
        line-height: 160%;
        text-transform: uppercase;
        color: var(--blue);
        line-height: 0;
      }
    }
  }

  footer {
    display: flex;
    align-items: center;
    gap: 2rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        color: var(--base-label);
        height: 1.125rem;
        width: 1.125rem;
      }

      span {
        font-weight: 400;
        font-size: 1rem;
        line-height: 0;
        color: var(--base-span);
      }

      time {
        font-weight: 400;
        font-size: 1rem;
        line-height: 0;
        color: var(--base-span);
      }
    }
  }
  p {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 130%;
    color: var(--base-title);
    margin: 1.25rem 0 0.625rem 0;
  }
`
