import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayStandBulk = ({
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
      d="M11.25 19.843v-2.67h1.5v2.67h3.195a.75.75 0 0 1 0 1.5h-7.89a.75.75 0 1 1 0-1.5z"
    />
    <Path
      fill={props.color}
      d="M6.007 2.658h11.987A3.51 3.51 0 0 1 21.5 6.164v7.501a3.51 3.51 0 0 1-3.506 3.508H6.007A3.51 3.51 0 0 1 2.5 13.665v-7.5a3.51 3.51 0 0 1 3.507-3.507"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMonitorDisplayStandBulk;
