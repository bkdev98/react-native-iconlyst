import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilmBroken = ({
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
      d="M11.25 20.663H7.786c-2.658 0-4.536-1.657-4.536-4.316V7.65c0-2.652 1.878-4.316 4.536-4.316h8.928c2.658 0 4.536 1.656 4.536 4.316v8.696c0 2.66-1.878 4.317-4.536 4.317h-2.232"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.77 9.323c-.768-.324-1.551.046-1.666.916a16.4 16.4 0 0 0 0 3.519c.105.837.816 1.254 1.666.92a9 9 0 0 0 2.63-1.651c.671-.617.656-1.46 0-2.053M21.25 7.691h-3.646m3.646 4.287h-3.646m3.646 4.286h-3.646M3.273 7.691h3.622m-3.622 4.287h3.622m-3.622 4.286h3.622M6.9 3.45v17.103M17.6 20.554V3.448"
    />
  </Svg>
);
export default IconlystFilmBroken;
