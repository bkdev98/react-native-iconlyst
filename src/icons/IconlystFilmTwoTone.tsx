import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilmTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 16.35V7.653c0-2.66 1.878-4.317 4.536-4.317h8.928c2.658 0 4.536 1.657 4.536 4.318v8.696c0 2.66-1.878 4.315-4.536 4.315H8.036c-2.658 0-4.536-1.663-4.536-4.315"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.65 13.027a9 9 0 0 1-2.63 1.65c-.85.335-1.561-.082-1.666-.92a16.4 16.4 0 0 1 0-3.518c.115-.87.898-1.24 1.666-.916a8.8 8.8 0 0 1 2.63 1.651c.656.593.671 1.436 0 2.053"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.523 7.693h3.622m-3.622 4.286h3.622m-3.622 4.287h3.622M7.15 3.449v17.103M21.5 7.694h-3.646M21.5 11.98h-3.646m3.646 4.287h-3.646m-.003 4.287V3.448"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFilmTwoTone;
