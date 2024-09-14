import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMagsafeWirelessChargerBold = ({
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
      d="M20.321 10.075c0-4.246-3.454-7.7-7.7-7.7s-7.7 3.454-7.7 7.7c0 3.993 3.055 7.284 6.95 7.662v3.138a.75.75 0 0 0 1.5 0v-3.138c3.895-.378 6.95-3.669 6.95-7.662"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMagsafeWirelessChargerBold;
