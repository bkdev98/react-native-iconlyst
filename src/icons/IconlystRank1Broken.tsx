import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRank1Broken = ({
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
      d="M15 16.234h4.497c.83 0 1.503.674 1.503 1.503v1.746c0 .827-.676 1.503-1.503 1.503H7.605M9 14.234H4.503c-.83 0-1.503.674-1.503 1.503v3.746c0 .827.677 1.503 1.503 1.503h.548M13.917 3.016c.598 0 1.083.484 1.083 1.082v1.928c0 .598-.485 1.083-1.083 1.083h-3.835A1.08 1.08 0 0 1 9 6.026V4.098c0-.598.484-1.082 1.082-1.082h.967"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 18.432v-5.945c0-.826.677-1.503 1.503-1.503h2.994c.83 0 1.503.673 1.503 1.503v8.498"
    />
  </Svg>
);
export default IconlystRank1Broken;
