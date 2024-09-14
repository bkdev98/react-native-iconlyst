import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWinterTemperatureTwoTone = ({
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
      d="M5.083 6v6.022c-1.207.913-2 2.347-2 3.978a5 5 0 0 0 10 0c0-1.63-.792-3.065-2-3.978V6a3 3 0 0 0-6 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.555 16a1.473 1.473 0 1 1-2.947 0 1.473 1.473 0 0 1 2.947 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.082 10.481v4.046M18.362 4.086l-.965.966-.975-.975M18.362 11.634l-.965-.966-.975.975M17.392 5.052v5.613M21.145 6.812l-1.319-.354.357-1.331M14.608 10.588l.354-1.32-1.332-.356M19.823 6.456l-4.861 2.807M21.145 8.902l-1.319.354.357 1.331M14.608 5.127l.354 1.319-1.332.357M19.823 9.258l-4.861-2.807"
    />
  </Svg>
);
export default IconlystWinterTemperatureTwoTone;
