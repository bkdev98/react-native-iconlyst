import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDelivery1TwoTone = ({
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
      d="M8.116 3.02 16.54 3c2.945-.007 4.782 2.067 4.79 5.01l.018 7.937c.006 2.943-1.82 5.026-4.766 5.033L8.158 21c-2.945.007-4.782-2.067-4.789-5.01l-.018-7.938C3.344 5.11 5.18 3.027 8.116 3.02"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.177 3 .016 7.64-2.832-.921-2.848.938-.01-7.632"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDelivery1TwoTone;
