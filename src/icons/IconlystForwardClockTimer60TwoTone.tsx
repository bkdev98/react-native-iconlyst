import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForwardClockTimer60TwoTone = ({
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
      d="M8.99 20.3a8.98 8.98 0 0 1-4.731-4.97 8.967 8.967 0 0 1 5.14-11.588c4.213-1.627 8.904.149 11.04 3.991"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.93 20.862a1.73 1.73 0 0 1-1.729-1.73V16.75a1.728 1.728 0 1 1 3.458 0v2.383a1.73 1.73 0 0 1-1.729 1.729"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.386 17.53a1.666 1.666 0 1 1-1.665 1.666v-1.673c0-.82.041-1.654.783-2.172.665-.465 1.553-.407 2.176.089"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.772 4.744v2.989h-2.973M12.665 7.916v4.182H9.22"
    />
  </Svg>
);
export default IconlystForwardClockTimer60TwoTone;
