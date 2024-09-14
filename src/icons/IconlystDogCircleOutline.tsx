import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDogCircleOutline = ({
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
      d="M12 22.05c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.55 12 2.55s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M17.23 17.171a.73.73 0 0 1-.35-.09c-1.16-.62-1.86-1.79-2.1-2.38-.15-.38.04-.82.42-.97.39-.15.82.04.97.42.12.3.61 1.18 1.41 1.61.37.2.5.65.31 1.02-.14.25-.39.4-.66.4z"
    />
    <Path
      fill={props.color}
      d="M10.41 17.8a.75.75 0 0 1-.64-1.14c.54-.89.76-2.01.71-2.85-.36.06-.85.13-1.53.21s-1.3-.11-1.79-.54c-.81-.7-1.12-1.94-1.14-2.86 0-.31.17-.59.46-.71L8.62 9c.04-.42.19-.9.52-1.31.3-.38.87-.84 1.89-.91l1.2-.09c2.02-.17 3.58 1.07 4.19 3.33 1.12 4.11-1.05 5.44-1.14 5.49a1 1 0 0 1-.29.1c-1.05.13-1.7-.29-2.06-.66-1.14-1.22-.84-3.61-.66-4.58a.75.75 0 0 1 .88-.6c.41.08.67.47.6.88-.23 1.24-.24 2.73.28 3.28.09.1.27.23.59.22.28-.27 1.02-1.27.35-3.72-.42-1.55-1.34-2.33-2.62-2.23l-1.21.1c-.39.03-.65.14-.82.35-.19.24-.23.59-.2.75a.76.76 0 0 1-.45.81l-2.1.89c.08.49.27 1.01.57 1.27.18.15.37.21.64.18 1.42-.16 1.88-.28 1.97-.3.17-.08.37-.09.55-.04.23.07.41.25.48.48.37 1.15.24 3.16-.74 4.77-.14.23-.39.36-.64.36z"
    />
  </Svg>
);
export default IconlystDogCircleOutline;
