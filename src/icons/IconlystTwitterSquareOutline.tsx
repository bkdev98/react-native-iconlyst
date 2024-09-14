import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTwitterSquareOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M16.21 21.754H7.78c-3.31 0-5.53-2.32-5.53-5.78v-7.95c0-3.45 2.22-5.78 5.53-5.78h8.44c3.31 0 5.53 2.32 5.53 5.78v7.95c0 3.45-2.22 5.78-5.53 5.78zm-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.95c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28v-7.95c0-2.6-1.58-4.28-4.03-4.28H7.77z"
    />
    <Path
      fill={props.color}
      d="M10.35 17.615c-.96 0-3.04-.17-4.2-1.57a.75.75 0 0 1-.1-.81c.13-.27.4-.44.7-.42.53.02 1.06-.07 1.55-.24-1.67-1.45-2.24-3.63-1.74-6.62.05-.28.25-.51.51-.59.27-.08.56-.01.76.19a7 7 0 0 0 3.25 1.87c.2-1.08.92-2.17 2.09-2.52 1.47-.45 2.57.38 3.07.87l.97-.06c.29-.02.55.12.69.37.14.24.14.55-.01.79l-.79 1.24c.17 4.25-2.35 7.25-6.33 7.5-.09 0-.23.01-.42.01zm-1.43-1.66c.59.14 1.22.19 1.76.15 3.21-.2 5.14-2.62 4.92-6.16 0-.16.03-.32.12-.45l.13-.2a.74.74 0 0 1-.51-.29c-.04-.05-.75-.95-1.72-.66-.84.26-1.14 1.35-1.07 1.89a.75.75 0 0 1-.22.63c-.16.16-.4.24-.63.21a8.56 8.56 0 0 1-3.8-1.5c-.12 2.75 1.1 3.83 2.22 4.46.23.13.37.36.38.62s-.11.51-.32.65c-.39.27-.82.49-1.26.66z"
    />
  </Svg>
);
export default IconlystTwitterSquareOutline;
