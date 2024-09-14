import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareAppleWatchFaceBroken = ({
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
      d="M8.826 22h6.348M8.826 2h6.348M5.445 8.673C5.44 6.483 6.767 5.29 8.913 5.29h6.167c2.14 0 3.475 1.191 3.475 3.382v6.591c0 2.224-1.336 3.443-3.475 3.443H8.92c-2.146 0-3.475-1.198-3.475-3.388V12.53"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.338 13.764-2.414-1.44V9.219"
    />
  </Svg>
);
export default IconlystSquareAppleWatchFaceBroken;
