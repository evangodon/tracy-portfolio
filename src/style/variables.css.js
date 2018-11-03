import { injectGlobal } from 'styled-components';



injectGlobal`
  :root {
    /* Colours */
    --white: #FFF;
    --black: #212121;
    --light-gray: #ECEFF1;
    --bg-color: #222;

    /* Z-indexes*/
    --z-header: 100;
    --z-lightbox-overlay: 300;
    --z-lightbox-image: 500;
  }
`;
