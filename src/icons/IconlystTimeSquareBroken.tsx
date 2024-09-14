import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimeSquareBroken = ({
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
      d="M2.75 10.5V7.916c0-3.027 1.894-5.166 4.915-5.166h8.67c3.03 0 4.915 2.14 4.915 5.166v8.168c0 3.027-1.886 5.166-4.916 5.166H7.665c-3.03 0-4.915-2.139-4.915-5.166v-2.042"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.391 14.018 12 11.995V7.634"
    />
  </Svg>
);
export default IconlystTimeSquareBroken;
