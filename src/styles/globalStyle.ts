import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const globalStyle = css`
  ${emotionNormalize}

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    border: 0;
    padding: 0;
  }

  html,
  body,
  #root {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

export default globalStyle;
