import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForwardClockTimer10TwoTone = ({
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
      d="M20.772 4.744v2.989h-2.973M12.665 7.916v4.182H9.22"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.908 20.755v-5.407l-1.691 1.37"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.93 20.862a1.73 1.73 0 0 1-1.729-1.73V16.75a1.729 1.729 0 1 1 3.458 0v2.383c0 .954-.774 1.729-1.729 1.729"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystForwardClockTimer10TwoTone;
