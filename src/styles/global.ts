import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  strong {
    font-weight: 700;
  }

  body {
    height: 100vh;
		width: 100vw;
		margin: 0px;
		background-color: black;
    -webkit-font-smoothing: antialiased;
	}

	.rubik-font {
		font-family: "Rubik", sans-serif;
	}

  #source-link {
		top: 60px;
	}

	#source-link > i {
		color: rgb(94, 106, 210);
	}

	#yt-link {  
		top: 10px;
	}

	#yt-link > i {
		color: rgb(239, 83, 80);
	}
`;
