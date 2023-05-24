import styled from 'styled-components'

export const PostContent = styled.div`
  a {
    display: flex;
    flex-direction: column;
    height: 16.25rem;
    background: var(--base-post);
    border-radius: 10px;
    padding: 2rem;
    text-decoration: none;
    border: 2px solid var(--base-post);
    transition: border 0.3s;
    max-width: 26rem;
    width: 100%;

    &:hover {
      border: 2px solid var(--base-label);
    }

    header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      h2 {
        font-weight: bold;
        font-size: 1.25rem;
        line-height: 160%;
        width: 16.85rem;
        color: var(--base-title);
      }

      time {
        margin-top: 0.375rem;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 160%;
        color: var(--base-span);
      }
    }

    p {
      font-weight: 400;
      width: 100%;
      font-size: 1rem;
      line-height: 160%;
      color: var(--base-text);
      margin-top: 1.25rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
    }
  }
`
