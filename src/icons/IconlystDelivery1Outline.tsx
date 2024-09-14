import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDelivery1Outline = ({
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
      d="M14.997 2.253a1 1 0 0 0-.143 0l-6.99.017c-1.654.004-3.053.598-4.034 1.655-.976 1.052-1.483 2.502-1.48 4.129l.02 7.938c.003 1.626.514 3.074 1.494 4.121.985 1.054 2.388 1.64 4.046 1.637l8.424-.02c1.658-.004 3.058-.598 4.039-1.656.975-1.052 1.48-2.502 1.476-4.129l-.019-7.937c-.004-1.626-.515-3.074-1.495-4.121-.986-1.054-2.388-1.64-4.046-1.637zm-.818 1.502-4.174.01.007 5.856 1.865-.615a.75.75 0 0 1 .467 0l1.848.601zm-5.674.014-.638.001c-1.282.003-2.269.454-2.938 1.176-.674.727-1.081 1.789-1.078 3.104l.018 7.938c.003 1.317.414 2.377 1.09 3.1.671.718 1.66 1.165 2.948 1.162l8.424-.02c1.287-.003 2.274-.455 2.942-1.175.673-.727 1.079-1.79 1.076-3.106l-.019-7.937c-.003-1.317-.414-2.377-1.09-3.1-.672-.718-1.66-1.165-2.947-1.162l-.614.002.015 6.887a.75.75 0 0 1-.982.715l-2.599-.846-2.615.862a.75.75 0 0 1-.985-.712z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDelivery1Outline;
