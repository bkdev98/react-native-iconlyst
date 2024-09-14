import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudShareLight = ({
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
      d="M7.117 7.885c-2.263.02-4.092 1.54-4.092 4.13 0 1.674.997 3.115 2.43 3.762a4.6 4.6 0 0 0 1.659.338h9.766a4.6 4.6 0 0 0 1.67-.333 4.13 4.13 0 0 0 2.425-3.768c0-2.589-1.828-4.109-4.09-4.13C16.884 6.257 15.606 3 12 3S7.117 6.256 7.117 7.885"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 20.724v-4.353M7.859 16.371v2.572A2.057 2.057 0 0 1 5.802 21H4.498M16.113 16.371v2.572c0 1.136.921 2.057 2.057 2.057h1.304"
    />
  </Svg>
);
export default IconlystCloudShareLight;
