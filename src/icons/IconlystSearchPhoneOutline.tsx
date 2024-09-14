import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchPhoneOutline = ({
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
      d="M13.174 3a.75.75 0 0 1 .75-.75h1.914a4.37 4.37 0 0 1 4.368 4.367v10.764a4.37 4.37 0 0 1-4.367 4.369h-5.515a4.367 4.367 0 0 1-4.368-4.367v-3.564a.75.75 0 1 1 1.5 0v3.563a2.87 2.87 0 0 0 2.868 2.868h5.515a2.87 2.87 0 0 0 2.868-2.868l-.001-10.764a2.87 2.87 0 0 0-2.868-2.868h-1.914a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.941 4.123a2.149 2.149 0 1 0 .001 4.298 2.149 2.149 0 0 0 0-4.298m2.995 4.234a3.649 3.649 0 1 0-1.092 1.03l.998.995a.75.75 0 0 0 1.06-1.062zM12.08 17.28a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchPhoneOutline;
