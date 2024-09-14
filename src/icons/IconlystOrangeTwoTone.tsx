import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOrangeTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.82 14.645q.04-.363.04-.737c0-3.862-3.327-6.993-7.43-6.993S3 10.045 3 13.908C3 17.77 6.327 20.9 10.43 20.9c.784 0 1.54-.114 2.249-.326"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.965 8.098c0-1.568 1.13-4.273 3.224-4.61"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.107 6.915c-.488-1.138 1.083-3.816-4.77-3.816.325.976-.108 3.816 4.77 3.816M8.852 15.852a.94.94 0 0 1 .916-1.12l10.3.001a.94.94 0 0 1 .916 1.12 6.176 6.176 0 0 1-6.066 5.048 6.17 6.17 0 0 1-6.066-5.049"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.434 18.923-4.57-4.19-4.334 4.333M14.863 14.732l-.004 6.165"
    />
  </Svg>
);
export default IconlystOrangeTwoTone;
