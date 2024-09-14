import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallTickTwoTone = ({
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
      d="M11.623 12.7c3.703 3.702 4.805-.841 7.162 1.514 2.274 2.273 3.58 2.727.7 5.607-.361.29-2.652 3.78-10.708-4.275C.722 7.493 4.207 5.2 4.497 4.838c2.886-2.887 3.334-1.574 5.607.7 2.358 2.357-2.184 3.46 1.52 7.162"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.95 6.335 2.14 2.145 4.41-4.414"
    />
  </Svg>
);
export default IconlystPhoneCallTickTwoTone;
