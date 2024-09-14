import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDelivery2TwoTone = ({
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
      d="M8.115 3.02 16.541 3c2.944-.007 4.781 2.067 4.79 5.01l.018 7.938c.006 2.943-1.82 5.026-4.767 5.032L8.158 21c-2.945.007-4.783-2.067-4.79-5.01L3.35 8.052C3.343 5.11 5.179 3.027 8.115 3.02"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.594 16.48h3.089M15.175 3l.017 7.641-2.833-.923-2.848.94-.009-7.633"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDelivery2TwoTone;
