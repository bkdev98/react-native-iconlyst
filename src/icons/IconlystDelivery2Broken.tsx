import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDelivery2Broken = ({
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
      d="M17.04 21c2.945.007 4.783-2.067 4.79-5.01l.019-7.938c.006-2.943-1.83-5.025-4.766-5.032L8.658 3c-2.945-.007-4.782 2.067-4.79 5.01l-.018 7.938c-.007 2.943 1.82 5.026 4.766 5.032h4.357M8.094 16.48h3.089"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.675 6 .017 4.641-2.833-.923-2.848.94-.009-7.633"
    />
  </Svg>
);
export default IconlystDelivery2Broken;
