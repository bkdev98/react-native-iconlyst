import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystContacts4Broken = ({
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
      d="M8.594 21C5.951 21 4.3 19.493 4.3 16.745V8.6c0-2.706 1.65-4.18 4.294-4.18h7.62c2.652 0 4.294 1.474 4.286 4.18v8.213C20.5 19.52 18.858 21 16.207 21h-3.922"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.054 17.284c0-1.093.862-2.453 3.345-2.453s3.346 1.35 3.346 2.443M14.536 10.454a2.136 2.136 0 1 1-2.137-2.137M16.04 3v2.962M8.768 3v2.962"
    />
  </Svg>
);
export default IconlystContacts4Broken;
