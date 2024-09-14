import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinBulk = ({
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
      d="M12.5 2.5c-4.425 0-8.026 3.601-8.026 8.027 0 5.636 6.592 10.973 8.026 10.973s8.026-5.337 8.026-10.973c0-4.426-3.601-8.027-8.026-8.027"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 13.225a2.763 2.763 0 0 1-2.759-2.759A2.763 2.763 0 0 1 12.5 7.707a2.76 2.76 0 0 1 2.758 2.759 2.76 2.76 0 0 1-2.758 2.759"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinBulk;
