import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSublumeTextOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M18.34 11.072a1.008 1.008 0 0 1 1.336 1.013v4.254a1.29 1.29 0 0 1-.87 1.188L5.66 21.695a1.008 1.008 0 0 1-1.338-1.014v-4.254a1.29 1.29 0 0 1 .87-1.187zm-.164 1.625L5.822 16.614v3.456l12.354-3.917z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m5.66 6.67 13.148 4.169.043.015c.487.188.813.65.827 1.172v4.254a1.007 1.007 0 0 1-1.337 1.013L5.193 13.124l-.044-.015a1.29 1.29 0 0 1-.826-1.172V7.683A1.007 1.007 0 0 1 5.66 6.67m.162 1.625v3.455l12.356 3.918v-3.455z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.339 2.306a1.008 1.008 0 0 1 1.337 1.014v4.254a1.29 1.29 0 0 1-.87 1.187L5.66 12.929a1.008 1.008 0 0 1-1.338-1.013V7.662a1.29 1.29 0 0 1 .87-1.188zm-.163 1.625L5.822 7.848v3.456l12.354-3.917z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSublumeTextOutline;
