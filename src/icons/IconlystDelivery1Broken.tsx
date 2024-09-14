import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDelivery1Broken = ({
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
      d="M8.658 21c-2.945.007-4.782-2.067-4.789-5.01l-.018-7.938C3.844 5.11 5.68 3.027 8.616 3.02L17.04 3c2.945-.007 4.782 2.067 4.79 5.01l.018 7.937c.006 2.943-1.82 5.026-4.766 5.033l-4.212.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.677 7 .016 3.64-2.832-.921-2.848.939-.01-7.633"
    />
  </Svg>
);
export default IconlystDelivery1Broken;
