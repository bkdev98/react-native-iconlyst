import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryCloseBroken = ({
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
      d="M21.848 12.601 21.83 8.01C21.823 5.067 19.985 2.992 17.04 3l-8.425.02c-2.936.006-4.772 2.089-4.765 5.032l.009 3.97M3.868 15.99c.007 2.942 1.844 5.016 4.79 5.01l3.961-.02"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.677 6 .016 3.67-2.832-.923-2.848.939-.01-6.66M21.85 21l-3.883-3.883m3.883 0L17.967 21"
    />
  </Svg>
);
export default IconlystDeliveryCloseBroken;
