import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarStickerAddBroken = ({
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
      d="M15.64 3v2.962M8.37 3v2.962M9.48 12.37h4.317m-2.158-2.16v4.317M3.9 8.6c0-2.705 1.65-4.178 4.294-4.178h7.62c2.652 0 4.294 1.473 4.286 4.179v6.003c0 .564-.218 1.106-.609 1.514l-4.042 4.211c-.413.43-.982.672-1.578.672H8.194c-2.643 0-4.294-1.507-4.294-4.255V12.18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.387 20.937v-3.085a2.73 2.73 0 0 1 2.723-2.73"
    />
  </Svg>
);
export default IconlystCalendarStickerAddBroken;
