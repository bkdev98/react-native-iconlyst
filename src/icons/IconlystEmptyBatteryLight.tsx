import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmptyBatteryLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.737 17.742h7.32c2.538 0 4.123-1.42 4.123-4.03v-3.35c0-2.651-1.585-4.104-4.124-4.104H7.745c-2.547 0-4.124 1.428-4.124 4.038v3.416c-.008 2.61 1.57 4.03 4.116 4.03"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.027 9.064h.8c1.301 0 1.794.743 1.794 2.1v1.708c0 1.333-.493 2.06-1.794 2.06h-.792"
    />
  </Svg>
);
export default IconlystEmptyBatteryLight;
