import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystContacts4Light = ({
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
      d="M8.345 4.422h7.62c2.651 0 4.294 1.473 4.286 4.179v8.213c0 2.706-1.643 4.187-4.294 4.187H8.345c-2.644 0-4.294-1.507-4.294-4.255V8.6c0-2.706 1.65-4.18 4.294-4.18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.805 17.285c0-1.093.862-2.453 3.345-2.453s3.346 1.35 3.346 2.443"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.286 10.453a2.136 2.136 0 1 1-4.273 0 2.136 2.136 0 0 1 4.273 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.79 3v2.962M8.517 3v2.962"
    />
  </Svg>
);
export default IconlystContacts4Light;
