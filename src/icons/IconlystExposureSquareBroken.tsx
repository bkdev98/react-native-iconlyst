import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExposureSquareBroken = ({
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
      d="M16.218 21C19.156 21 21 18.919 21 15.974V8.026C21 5.081 19.166 3 16.218 3H7.783C4.835 3 3 5.081 3 8.026v7.948C3 18.919 4.835 21 7.783 21h4.676M8.264 6.813v3.739M10.133 8.682H6.394M17.104 15.652h-3.74M17.443 6.403 4.253 19.592"
    />
  </Svg>
);
export default IconlystExposureSquareBroken;
