import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailNotificationOutline = ({
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
      d="M15.885 20.564H7.547a4.8 4.8 0 0 1-3.455-1.405 5.65 5.65 0 0 1-1.588-4.052V9.294A5.156 5.156 0 0 1 7.562 3.83h5.771a.75.75 0 1 1 0 1.5h-5.77a3.653 3.653 0 0 0-3.559 3.964v5.813a4.16 4.16 0 0 0 1.147 2.99 3.32 3.32 0 0 0 2.4.967h8.334a3.32 3.32 0 0 0 2.4-.967 4.16 4.16 0 0 0 1.148-2.99v-3.274a.75.75 0 1 1 1.5 0v3.274a5.65 5.65 0 0 1-1.588 4.052 4.8 4.8 0 0 1-3.46 1.405"
    />
    <Path
      fill={props.color}
      d="M18.878 9.69a3.127 3.127 0 1 1 0-6.254 3.127 3.127 0 0 1 0 6.254m0-4.754a1.627 1.627 0 1 0 0 3.257 1.627 1.627 0 0 0 0-3.26zM11.743 13.766a2.7 2.7 0 0 1-1.675-.59l-3.8-3.06a.75.75 0 1 1 .94-1.167l3.794 3.057a1.185 1.185 0 0 0 1.482 0l1.616-1.312a.75.75 0 0 1 .945 1.164l-1.621 1.317a2.7 2.7 0 0 1-1.681.59"
    />
  </Svg>
);
export default IconlystEmailNotificationOutline;
