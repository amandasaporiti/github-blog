import styled from 'styled-components'

export const PostContentContainer = styled.div`
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--base-text);

  ul {
    list-style: inherit;
    padding-left: 1.5rem;

    li {
      margin-top: 0.5rem;
    }
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    color: var(--base-text);
  }

  h3,
  strong {
    color: var(--blue);
  }

  img {
    width: 100%;
  }

  a {
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    color: var(--blue);
  }
`
