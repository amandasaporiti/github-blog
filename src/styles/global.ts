import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  :root{
    --blue: #3294F8;
    --base-title: #E7EDF4;
    --base-subtitle: #C4D4E3;
    --base-text: #AFC2D4;
    --base-span: #7B96B2;
    --base-label: #3A536B;
    --base-border: #1C2F41;
    --base-post: #112131;
    --base-profile: #0B1B2B;
    --base-background: #071422;
    --base-input: #040F1A;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :focus{
      outline: 0;
      box-shadow: 0 0 0 2px var(--base-border);
    }
  }

  body{
    -webkit-font-smoothing: antialiased;
    background: var(--base-background);
  }

  body, input, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
  }
  
  button{
    cursor: pointer;
  }
`
