import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

/* 
styled - reset
npm i styled-reset
*/

const GlobalStyles = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'Pretendard-ExtraLight';
        src: url('./Assets/Font/Pretendard-ExtraLight.otf') format('opentype');
    }

    @font-face {
        font-family: 'Pretendard-Light';
        src: url('./Assets/Font/Pretendard-Light.otf') format('opentype');
    }

    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('./Assets/Font/Pretendard-Regular.otf') format('opentype');
    }

    @font-face {
        font-family: 'Pretendard-Medium';
        src: url('./Assets/Font/Pretendard-Medium.otf') format('opentype');
    }

    @font-face {
        font-family: 'Pretendard-Bold';
        src: url('./Assets/Font/Pretendard-Bold.otf') format('opentype');
    }    

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: ${({ theme }) => theme.FONT_WEIGHT.extraLight};
    }

    button {
        border: none;
    }

    ul > li {
        list-style: none;
    }
`;

export default GlobalStyles;
