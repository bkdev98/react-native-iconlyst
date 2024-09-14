import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDelivery2Outline = ({
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
      d="M14.996 2.253a1 1 0 0 0-.142 0l-6.99.017c-1.655.004-3.054.598-4.035 1.655-.976 1.052-1.483 2.502-1.48 4.13l.02 7.937c.003 1.626.514 3.074 1.494 4.121.986 1.054 2.389 1.64 4.047 1.637l8.424-.02c1.658-.003 3.058-.597 4.039-1.655.975-1.052 1.48-2.503 1.476-4.13l-.019-7.937c-.004-1.626-.516-3.074-1.495-4.121-.986-1.054-2.389-1.64-4.046-1.637zm-.818 1.502-4.174.01.007 5.856 1.865-.615a.75.75 0 0 1 .467-.001l1.848.602zm-5.674.014-.637.001c-1.283.003-2.27.454-2.939 1.175-.674.727-1.081 1.79-1.078 3.106l.018 7.938c.003 1.316.414 2.376 1.09 3.1.672.717 1.66 1.164 2.948 1.161l8.425-.02c1.287-.002 2.274-.454 2.942-1.175.673-.726 1.079-1.789 1.076-3.106l-.019-7.937c-.003-1.317-.414-2.377-1.091-3.1-.671-.718-1.66-1.165-2.947-1.162l-.614.002.015 6.888a.75.75 0 0 1-.982.714l-2.599-.847-2.615.863a.75.75 0 0 1-.985-.711zM6.594 16.48a.75.75 0 0 1 .75-.75h3.09a.75.75 0 1 1 0 1.5h-3.09a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDelivery2Outline;
