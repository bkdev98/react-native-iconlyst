import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRank1TwoTone = ({
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
      d="M9.5 14.234H5.003c-.83 0-1.503.674-1.503 1.503v3.746c0 .827.677 1.503 1.503 1.503h14.993c.828 0 1.504-.676 1.504-1.503v-1.746c0-.83-.674-1.503-1.504-1.503H15.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.417 3.016h-3.835c-.598 0-1.082.484-1.082 1.082v1.928c0 .598.484 1.083 1.082 1.083h3.835c.598 0 1.083-.485 1.083-1.083V4.098c0-.598-.485-1.082-1.083-1.082"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.5 20.985v-8.498c0-.83-.674-1.503-1.503-1.503h-2.994c-.826 0-1.503.677-1.503 1.503v8.498"
    />
  </Svg>
);
export default IconlystRank1TwoTone;
