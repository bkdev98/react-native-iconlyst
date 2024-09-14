import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessDisconnectBold = ({
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
      d="M15.63 9.803a1 1 0 1 0-.658 1.89 8.6 8.6 0 0 1 2.554 1.421 1.003 1.003 0 0 0 1.407-.156 1 1 0 0 0-.157-1.405 10.6 10.6 0 0 0-3.146-1.75M21.68 7.892a15.34 15.34 0 0 0-11.653-3.284 1 1 0 1 0 .263 1.982 13.33 13.33 0 0 1 10.128 2.854 1 1 0 1 0 1.262-1.552M6.825 6.052l-.007-.007L3.96 3.183a1 1 0 1 0-1.416 1.413l1.91 1.911c-.698.397-1.38.853-2.033 1.381a1 1 0 0 0 1.255 1.557 13 13 0 0 1 2.248-1.464l2.033 2.036c-.934.383-1.83.891-2.635 1.535a1 1 0 0 0 1.25 1.562 8.6 8.6 0 0 1 2.947-1.533l2.406 2.41c-1.3.028-2.593.475-3.627 1.36a1 1 0 1 0 1.298 1.52c1.397-1.193 3.511-1.195 4.92-.005a.97.97 0 0 0 .487.206l2.18 2.183a1.001 1.001 0 0 0 1.415-1.413zM12.049 18.588c-.695 0-1.262.566-1.262 1.26 0 .697.567 1.263 1.262 1.263s1.26-.566 1.26-1.262c0-.695-.565-1.261-1.26-1.261"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWirelessDisconnectBold;
