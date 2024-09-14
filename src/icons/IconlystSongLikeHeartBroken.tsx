import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongLikeHeartBroken = ({
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
      d="M15.894 18.076c-.308-.964.052-2.064 1.063-2.39a1.73 1.73 0 0 1 1.561.262 1.74 1.74 0 0 1 1.559-.263c1.012.327 1.374 1.427 1.066 2.391-.48 1.526-2.625 2.703-2.625 2.703s-2.127-1.159-2.624-2.703"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.07 14.207.755-6.266s.372 1.477 1.795 1.95M12.25 21a9 9 0 0 1-9-9c0-1.925.604-3.708 1.634-5.172M21.25 12A9 9 0 0 0 7.733 4.214"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.233 11.87a2.103 2.103 0 1 1-2.034.97"
    />
  </Svg>
);
export default IconlystSongLikeHeartBroken;
