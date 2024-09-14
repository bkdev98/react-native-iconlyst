import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInboxBadgeTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.854 3.984H8.528c-2.839 0-4.619 2.016-4.619 4.87v7.7c0 2.855 1.772 4.87 4.619 4.87h8.144c2.848 0 4.62-2.015 4.62-4.87V10.74"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.375 3.363a2.32 2.32 0 0 1 2.318 2.326 2.32 2.32 0 0 1-2.318 2.327 2.32 2.32 0 0 1-2.318-2.327 2.32 2.32 0 0 1 2.318-2.326"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.289 13.139h-4.136c-.857 0-1.64.486-2.02 1.256a2.82 2.82 0 0 1-2.53 1.575 2.82 2.82 0 0 1-2.528-1.575 2.25 2.25 0 0 0-2.02-1.256H3.923"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystInboxBadgeTwoTone;
