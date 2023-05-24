import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  input {
    width: 100%;
    flex: 1;
    padding: 0.75rem 1rem;
    background: var(--base-input);
    border: 1px solid var(--base-border);
    border-radius: 6px;
    color: var(--base-title);

    :focus {
      box-shadow: 0 0 0 2px var(--blue);
      transition: box-shadow 0.1s;
    }

    ::placeholder {
      font-weight: 400;
      font-size: 1rem;
      line-height: 160%;
      color: var(--base-label);
    }
  }
`
