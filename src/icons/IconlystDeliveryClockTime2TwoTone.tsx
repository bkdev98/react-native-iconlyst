import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryClockTime2TwoTone = ({
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
      d="M20.355 10.413 20.337 8.2c-.006-2.78-1.742-4.74-4.525-4.733l-7.96.018C5.078 3.492 3.343 5.46 3.35 8.24l.017 7.5c.006 2.78 1.742 4.74 4.525 4.733l3.743-.018"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.524 3.468.016 6.3-2.676-.872-2.692.888-.008-6.292"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.66 20.533a3.69 3.69 0 1 0 0-7.379 3.69 3.69 0 0 0 0 7.38"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.807 17.803-1.166-.697v-1.5"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDeliveryClockTime2TwoTone;
