import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserSearchLight = ({
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
      d="M17.667 18.708a2.387 2.387 0 1 1-3.376-3.376 2.387 2.387 0 0 1 3.375 3.375m0 0L18.96 20M5.342 19.562c0-2.051 1.618-4.605 6.281-4.605"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.636 8.012a4.013 4.013 0 1 1-8.026 0 4.013 4.013 0 0 1 8.026 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserSearchLight;
