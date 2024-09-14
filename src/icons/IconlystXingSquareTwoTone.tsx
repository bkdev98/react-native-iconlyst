import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystXingSquareTwoTone = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.906 8.243 1.092 2.286a.62.62 0 0 1-.021.575l-2.06 3.537a.62.62 0 0 1-.538.312H7.313a.31.31 0 0 1-.27-.461L8.979 11.1a.62.62 0 0 0 .02-.566L7.967 8.332a.31.31 0 0 1 .28-.441h2.1a.62.62 0 0 1 .56.352"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.002 16.61-1.919-3.294a.62.62 0 0 1-.01-.628l3.01-5.284a.62.62 0 0 1 .54-.314h2.064a.31.31 0 0 1 .27.461l-2.884 5.14a.62.62 0 0 0 .01.622l1.795 3.124a.31.31 0 0 1-.265.47H13.53a.62.62 0 0 1-.53-.297"
    />
  </Svg>
);
export default IconlystXingSquareTwoTone;
