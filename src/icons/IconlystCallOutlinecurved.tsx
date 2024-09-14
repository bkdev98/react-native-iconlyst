import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallOutlinecurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.26 3.63q-.13.001-.262.023c-1.118.189-2.125 1.493-2.333 1.832C2.623 6.95 3.437 10.347 8.74 15.65c5.304 5.303 8.701 6.115 10.112 5.11.394-.244 1.696-1.247 1.885-2.367.082-.487-.063-.95-.442-1.411-2.217-2.692-2.919-2.351-3.886-1.88-1.456.71-2.878 1.083-5.54-1.58-2.66-2.66-2.289-4.082-1.58-5.54.472-.968.813-1.668-1.882-3.888-.377-.31-.755-.463-1.147-.463m11.252 19.03c-1.982 0-5.12-1.236-9.833-5.95C.641 9.673 1.355 6.146 2.407 4.669c-.002 0 1.322-2.117 3.285-2.484.934-.174 1.853.085 2.667.75 3.342 2.754 3.032 4.156 2.278 5.704-.463.95-.829 1.702 1.291 3.823 2.121 2.119 2.873 1.757 3.823 1.29 1.55-.752 2.95-1.064 5.702 2.277.668.816.928 1.74.75 2.676-.377 1.992-2.529 3.308-2.55 3.32-.465.334-1.163.635-2.14.635"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallOutlinecurved;
