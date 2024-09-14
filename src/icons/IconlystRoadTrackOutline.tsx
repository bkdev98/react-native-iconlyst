import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRoadTrackOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M14.647 15.112a.75.75 0 0 1 1.061 0l1.519 1.519 1.519-1.519a.75.75 0 0 1 1.06 1.06l-1.518 1.52 1.518 1.518a.75.75 0 0 1-1.06 1.061l-1.52-1.519-1.518 1.52a.75.75 0 0 1-1.06-1.062l1.518-1.518-1.519-1.52a.75.75 0 0 1 0-1.06M6.527 5.009a1.527 1.527 0 1 0 0 3.053 1.527 1.527 0 0 0 0-3.053M3.5 6.536a3.027 3.027 0 1 1 6.054 0 3.027 3.027 0 0 1-6.054 0M16.987 5.55a.75.75 0 0 1 1.06 0l2.733 2.732a.75.75 0 0 1 0 1.06l-2.732 2.733a.75.75 0 0 1-1.06-1.061l2.201-2.202-2.202-2.202a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.442 12.95c-1.644 2.281-1.943 5.038-1.747 6.212a.75.75 0 0 1-1.48.247c-.26-1.558.125-4.72 2.01-7.335 1.937-2.687 5.403-4.72 11.118-4.006a.75.75 0 0 1-.186 1.489c-5.214-.652-8.123 1.185-9.715 3.394"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRoadTrackOutline;
