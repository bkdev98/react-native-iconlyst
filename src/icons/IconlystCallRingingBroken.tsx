import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallRingingBroken = ({
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
      d="M8.777 15.545C.722 7.493 4.207 5.2 4.497 4.838c2.886-2.887 3.334-1.574 5.607.7 2.356 2.356-2.185 3.46 1.519 7.161 3.703 3.703 4.803-.841 7.16 1.514 2.275 2.273 3.58 2.728.701 5.607-.32.256-2.14 3.001-8.098-1.888M14.965 6.47a4.11 4.11 0 0 1 3.249 3.25M14.965 3.182a7.4 7.4 0 0 1 6.534 6.527"
    />
  </Svg>
);
export default IconlystCallRingingBroken;
