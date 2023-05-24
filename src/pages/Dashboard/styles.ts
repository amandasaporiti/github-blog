import styled from 'styled-components'

export const PostsContainer = styled.div`
  max-width: 54rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: -5.625rem auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    h2 {
      font-weight: bold;
      font-size: 1.125rem;
      line-height: 160%;
      color: var(--base-subtitle);
    }

    span {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 160%;
      color: var(--base-span);
    }
  }
`

export const Posts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 3rem 0;
`
