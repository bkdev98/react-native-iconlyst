import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMagsafeWirelessChargingOutline = ({
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
      d="M12.87 3.75a6.485 6.485 0 1 0 0 12.97 6.485 6.485 0 0 0 0-12.97m-7.984 6.485A7.985 7.985 0 0 1 12.87 2.25a7.985 7.985 0 1 1-7.985 7.985"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.868 16.713a.75.75 0 0 1 .751.749l.005 3.537a.75.75 0 1 1-1.5.002l-.005-3.537a.75.75 0 0 1 .75-.751M13.24 6.353a.75.75 0 0 1 .3 1.017l-1.175 2.161h2.276a.75.75 0 0 1 .659 1.109l-1.78 3.267a.75.75 0 0 1-1.317-.717l1.176-2.159h-2.275a.75.75 0 0 1-.66-1.108l1.778-3.27a.75.75 0 0 1 1.017-.3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMagsafeWirelessChargingOutline;
