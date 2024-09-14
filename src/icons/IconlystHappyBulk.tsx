import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHappyBulk = ({
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
      d="M12.5 2.5C7.261 2.5 3 6.762 3 12s4.261 9.5 9.5 9.5S22 17.238 22 12s-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.775 10a.976.976 0 0 1-.976-.974.977.977 0 0 1 1.668-.687.975.975 0 0 1-.692 1.662M12.5 16.25c-1.93 0-2.63-1.77-2.63-2.961a.75.75 0 0 1 1.5 0c0 .015.011 1.462 1.13 1.462 1.116 0 1.13-1.447 1.13-1.462a.75.75 0 1 1 1.5 0c0 1.19-.702 2.962-2.63 2.962M8.3 9.026a.977.977 0 0 1 1.667-.687.975.975 0 1 1-1.668.687"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHappyBulk;
