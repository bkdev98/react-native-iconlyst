import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareAppleWatchFaceTwoTone = ({
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
      d="M9.326 22h6.348M9.326 2h6.348"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.42 5.291h6.166c2.146 0 3.475 1.191 3.469 3.382v6.646c0 2.19-1.33 3.388-3.475 3.388H9.42c-2.14 0-3.475-1.22-3.475-3.443V8.673c0-2.19 1.335-3.382 3.475-3.382"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.838 13.764-2.414-1.44V9.219"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSquareAppleWatchFaceTwoTone;
