import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongLikeHeartTwoTone = ({
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
      d="M12.5 21a9 9 0 1 1 9-9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.144 18.076c-.308-.964.052-2.064 1.064-2.39a1.73 1.73 0 0 1 1.56.262 1.74 1.74 0 0 1 1.559-.263c1.012.327 1.374 1.427 1.066 2.391-.48 1.526-2.625 2.703-2.625 2.703s-2.127-1.159-2.624-2.703M13.319 14.208a2.103 2.103 0 1 1-4.175-.503 2.103 2.103 0 0 1 4.175.503"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.32 14.207.755-6.266s.372 1.477 1.795 1.95"
    />
  </Svg>
);
export default IconlystSongLikeHeartTwoTone;
