import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWcTwoTone = ({
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
      d="M6.567 4.175h11.866c2.507 0 4.067 1.77 4.067 4.273v7.104c0 2.504-1.56 4.274-4.068 4.274H6.567c-2.507 0-4.067-1.77-4.067-4.274V8.448c0-2.503 1.568-4.273 4.067-4.273"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.294 10.452a2.188 2.188 0 1 0-3.095 3.095c.855.856 2.24.856 3.095 0M6.707 9.926l1.385 4.148 1.573-4.148 1.573 4.148 1.385-4.148"
    />
  </Svg>
);
export default IconlystWcTwoTone;
