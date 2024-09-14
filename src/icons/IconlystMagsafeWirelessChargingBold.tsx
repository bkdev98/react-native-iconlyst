import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMagsafeWirelessChargingBold = ({
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
      d="m15.08 10.534-1.801 3.3a.75.75 0 0 1-1.316-.719l1.195-2.19h-2.236a.75.75 0 0 1-.658-1.11l1.799-3.3a.75.75 0 0 1 1.317.719l-1.195 2.191h2.237c.264 0 .51.139.644.367.136.227.14.51.014.742m-2.46-8.159c-4.244 0-7.698 3.454-7.698 7.7 0 3.993 3.055 7.284 6.949 7.662v3.138a.75.75 0 0 0 1.5 0v-3.138c3.895-.378 6.95-3.669 6.95-7.662 0-4.246-3.454-7.7-7.7-7.7"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMagsafeWirelessChargingBold;
