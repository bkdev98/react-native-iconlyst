import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneRingVibration3Bulk = ({
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
      d="M3.621 8.695a.75.75 0 0 0-.75.75v5.3a.75.75 0 0 0 1.5 0v-5.3a.75.75 0 0 0-.75-.75M21.621 8.595a.75.75 0 0 0-.75.75v5.3a.75.75 0 0 0 1.5 0v-5.3a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.12 2.745h-4.8c-2.19 0-3.9 1.71-3.9 3.9v10.7c0 2.19 1.71 3.9 3.9 3.9h4.77c.07 0 .13.01.19.01.91 0 1.79-.37 2.49-1.03.79-.75 1.25-1.8 1.25-2.88v-10.7c0-2.19-1.71-3.9-3.9-3.9"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.571 17.75c-.53 0-.95-.42-.95-.95 0-.54.5-.95.95-.95.53 0 .95.42.95.95 0 .54-.5.95-.95.95"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneRingVibration3Bulk;
