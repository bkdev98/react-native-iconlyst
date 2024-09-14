import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilmLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 16.35V7.653c0-2.66 1.878-4.317 4.536-4.317h8.928C19.122 3.336 21 4.993 21 7.654v8.696c0 2.66-1.878 4.315-4.536 4.315H7.536C4.878 20.665 3 19.002 3 16.35"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.15 13.027a9 9 0 0 1-2.63 1.65c-.85.335-1.561-.082-1.666-.92a16.4 16.4 0 0 1 0-3.518c.114-.87.898-1.24 1.666-.916a8.8 8.8 0 0 1 2.63 1.651c.656.593.671 1.436 0 2.053"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 7.691h-3.646M21 11.978h-3.646M21 16.264h-3.646M3.023 7.691h3.622m-3.622 4.287h3.622m-3.622 4.286h3.622M6.648 3.45v17.103M17.352 20.554V3.448"
    />
  </Svg>
);
export default IconlystFilmLight;
