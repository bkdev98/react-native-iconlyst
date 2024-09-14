import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayStandBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.994 2.658H6.007A3.51 3.51 0 0 0 2.5 6.164v7.501a3.51 3.51 0 0 0 3.507 3.508h5.243v2.67H8.055a.75.75 0 1 0 0 1.5h7.89a.75.75 0 0 0 0-1.5H12.75v-2.67h5.244a3.51 3.51 0 0 0 3.506-3.508v-7.5a3.51 3.51 0 0 0-3.506-3.507"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorDisplayStandBold;
