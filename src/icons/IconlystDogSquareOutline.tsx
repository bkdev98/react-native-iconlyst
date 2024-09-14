import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDogSquareOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M17.035 17.176a.73.73 0 0 1-.35-.09c-1.16-.62-1.86-1.79-2.1-2.38a.75.75 0 0 1 .42-.97c.38-.15.82.04.97.42.11.28.61 1.18 1.41 1.61.36.2.5.65.31 1.02-.14.25-.39.4-.66.4z"
    />
    <Path
      fill={props.color}
      d="M10.225 17.806a.75.75 0 0 1-.64-1.14c.54-.89.76-2.01.71-2.85-.36.06-.85.13-1.53.21s-1.3-.11-1.79-.54c-.8-.7-1.11-1.94-1.14-2.86 0-.31.17-.59.46-.71l2.14-.91c.04-.42.19-.9.52-1.31.3-.38.87-.84 1.88-.91l1.2-.09c2.01-.17 3.58 1.07 4.19 3.33 1.12 4.11-1.05 5.44-1.14 5.49s-.19.08-.29.1c-1.05.13-1.7-.29-2.05-.66-1.14-1.22-.84-3.61-.66-4.58a.75.75 0 0 1 .88-.6c.41.08.67.47.6.88-.23 1.24-.24 2.73.27 3.28.09.1.26.21.59.22.28-.27 1.02-1.27.35-3.72-.42-1.55-1.35-2.33-2.62-2.23l-1.21.1c-.39.03-.65.14-.82.35-.19.24-.23.59-.2.75a.76.76 0 0 1-.45.81l-2.09.89c.08.49.27 1.01.57 1.27.17.15.37.2.64.18 1.42-.16 1.88-.27 1.97-.3a.756.756 0 0 1 1.04.44c.38 1.15.24 3.16-.74 4.77-.14.23-.39.36-.64.36z"
    />
    <Path
      fill={props.color}
      d="M16.215 22.056h-8.43c-3.31 0-5.53-2.32-5.53-5.78v-7.95c0-3.45 2.22-5.78 5.53-5.78h8.43c3.31 0 5.53 2.32 5.53 5.78v7.95c0 3.46-2.22 5.78-5.53 5.78m-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.95c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28v-7.95c0-2.6-1.58-4.28-4.03-4.28z"
    />
  </Svg>
);
export default IconlystDogSquareOutline;