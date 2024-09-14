import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserBroken = ({
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
      d="M20.369 16.184A8.9 8.9 0 0 0 21.4 12c0-4.972-4.028-9-9-9a8.96 8.96 0 0 0-4.697 1.32M4.422 16.155A8.9 8.9 0 0 1 3.4 12.001c0-2.13.739-4.085 1.974-5.626"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.667 10.325a3.296 3.296 0 1 1-1.464-2.74"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.508 19.405A8.96 8.96 0 0 1 12.4 21a8.9 8.9 0 0 1-5.148-1.625c.205-1.586 1.616-3.347 5.118-3.347 3.542 0 4.943 1.771 5.138 3.377"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserBroken;
