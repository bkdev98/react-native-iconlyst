import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryClockTime2Broken = ({
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
      d="M3.867 15.74c.007 2.78 1.742 4.74 4.525 4.733l3.743-.018M20.855 10.413 20.837 8.2c-.006-2.78-1.742-4.74-4.525-4.733l-7.96.018C5.578 3.492 3.843 5.46 3.85 8.24l.008 3.75"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.024 6.468.016 3.3-2.676-.871-2.692.887-.008-6.292M18.16 20.533a3.69 3.69 0 1 0 0-7.379 3.69 3.69 0 0 0 0 7.38"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.307 17.803-1.166-.697v-1.5"
    />
  </Svg>
);
export default IconlystDeliveryClockTime2Broken;
