import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMagsafeWirelessChargingBulk = ({
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
      d="M12.62 2.375c-4.244 0-7.698 3.454-7.698 7.7 0 3.993 3.055 7.284 6.949 7.662v3.138a.75.75 0 0 0 1.5 0v-3.138c3.895-.378 6.95-3.669 6.95-7.662 0-4.246-3.454-7.7-7.7-7.7"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m13.279 13.834 1.8-3.3a.75.75 0 0 0-.014-.742.75.75 0 0 0-.643-.367h-2.238l1.196-2.19a.75.75 0 0 0-1.318-.72l-1.798 3.3a.75.75 0 0 0 .658 1.11h2.236l-1.195 2.19a.75.75 0 0 0 1.316.72"
    />
  </Svg>
);
export default IconlystMagsafeWirelessChargingBulk;
