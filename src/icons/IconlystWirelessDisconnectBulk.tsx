import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessDisconnectBulk = ({
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
      d="M4.139 3.514a.75.75 0 1 0-1.09 1.03l2.38 2.518a11.4 11.4 0 0 0-2.486 2.405 1.965 1.965 0 0 0 .151 2.545l7.518 7.952c.376.398.885.618 1.434.618h.001c.54 0 1.063-.225 1.435-.618l2.071-2.19 2.564 2.712a.747.747 0 0 0 1.06.03.75.75 0 0 0 .029-1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.15 9.452a11.37 11.37 0 0 0-10.175-4.454.499.499 0 0 0-.311.841l7.718 8.164a.5.5 0 0 0 .726.001l1.895-1.998a1.97 1.97 0 0 0 .147-2.554"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWirelessDisconnectBulk;
