import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExposureSquareLight = ({
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
      d="M7.783 21h8.435C19.156 21 21 18.919 21 15.974V8.026C21 5.081 19.166 3 16.218 3H7.783C4.835 3 3 5.081 3 8.026v7.948C3 18.919 4.835 21 7.783 21"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.264 6.813v3.739M10.133 8.682h-3.74M17.103 15.65h-3.739M19.472 4.617 4.252 19.594"
    />
  </Svg>
);
export default IconlystExposureSquareLight;
