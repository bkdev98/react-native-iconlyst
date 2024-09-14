import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGrinningBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 2.5C7.262 2.5 3 6.762 3 12s4.262 9.5 9.5 9.5S22 17.238 22 12s-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.725 10a.976.976 0 0 1-.692-1.661.977.977 0 0 1 1.668.687.976.976 0 0 1-.976.975M12.5 16.55c-1.692 0-3.07-1.463-3.07-3.261a.5.5 0 0 1 .5-.5h5.14a.5.5 0 0 1 .5.5c0 1.798-1.377 3.262-3.07 3.262M8.25 9.026a.96.96 0 0 1 .283-.687.977.977 0 0 1 1.668.687.976.976 0 0 1-1.951 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGrinningBulk;
