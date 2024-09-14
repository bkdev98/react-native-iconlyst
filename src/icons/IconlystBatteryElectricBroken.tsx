import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBatteryElectricBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3 17.978 2.682.534.53-2.668"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.666 18.186a8.761 8.761 0 0 1 7.852-14.708M21 6.295l-2.683-.533-.53 2.667"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.335 6.086a8.761 8.761 0 0 1-7.853 14.708"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.682 7.23h2.705c.216 0 .368.214.296.418l-1.197 2.809a.314.314 0 0 0 .296.418h2.554c.27 0 .414.317.236.52l-4.85 5.536c-.219.25-.624.033-.539-.287l.925-3.468a.314.314 0 0 0-.303-.394H8.663a.314.314 0 0 1-.294-.422l1.01-2.462"
    />
  </Svg>
);
export default IconlystBatteryElectricBroken;
