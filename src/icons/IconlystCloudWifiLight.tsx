import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudWifiLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.564 17.102A4.14 4.14 0 0 0 21 13.328c0-2.596-1.83-4.139-4.103-4.141 0-1.633-1.28-4.898-4.897-4.898S7.103 7.554 7.103 9.187C4.833 9.207 3 10.732 3 13.328c0 1.68 1 3.125 2.436 3.774M11.99 19.71v-.046"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.14 17.547a2.88 2.88 0 0 1 3.709-.006M8.35 15.295a5.835 5.835 0 0 1 7.282 0"
    />
  </Svg>
);
export default IconlystCloudWifiLight;
