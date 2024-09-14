import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarStickerAddTwoTone = ({
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
      d="M15.949 20.329c-.413.43-.982.672-1.578.672H8.694c-2.643 0-4.294-1.507-4.294-4.255V8.6c0-2.706 1.65-4.18 4.294-4.18h7.62c2.652 0 4.294 1.474 4.286 4.18v6.003c0 .564-.218 1.106-.609 1.514z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.887 20.937v-3.085a2.73 2.73 0 0 1 2.723-2.73h2.92"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.14 3v2.962M8.87 3v2.962"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.98 12.37h4.317m-2.158-2.16v4.317"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCalendarStickerAddTwoTone;
