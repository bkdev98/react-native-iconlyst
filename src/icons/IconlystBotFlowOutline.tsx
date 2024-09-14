import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBotFlowOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M13.036 11.218a1.506 1.506 0 0 0-2.13 0L8.77 13.356a1.506 1.506 0 0 0 0 2.13l2.137 2.137a1.506 1.506 0 0 0 2.13 0l2.137-2.138a1.506 1.506 0 0 0 0-2.129zm-1.062 1.06zl2.138 2.138v.001l.001.003v.002l-.001.002-2.138 2.137-.002.002h-.005l-.001-.002-2.138-2.137-.001-.002v-.005l.001-.001 2.138-2.138.001-.001h.005"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.971 7.316a.75.75 0 0 0-.75.75v3.461a.75.75 0 0 0 1.5 0v-3.46a.75.75 0 0 0-.75-.75M14.173 14.443a.75.75 0 0 1 .75-.75h3.487c.974 0 1.764.79 1.764 1.764v2.157a.75.75 0 0 1-1.5 0v-2.157a.264.264 0 0 0-.264-.264h-3.487a.75.75 0 0 1-.75-.75M11.057 5.735a.914.914 0 1 1 1.828 0 .914.914 0 0 1-1.828 0M13.518 5.735a.915.915 0 1 1 1.829 0 .915.915 0 0 1-1.83 0M8.593 5.735a.915.915 0 1 1 1.83 0 .915.915 0 0 1-1.83 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.258 5.65a3.167 3.167 0 0 1 3.167-3.168h7.083a3.167 3.167 0 0 1 0 6.335H8.425A3.167 3.167 0 0 1 5.258 5.65m11.918 0c0-.921-.747-1.668-1.668-1.668H8.425a1.667 1.667 0 1 0 0 3.335h7.083c.921 0 1.668-.747 1.668-1.667M20.25 19.19a.827.827 0 1 0-1.654 0 .827.827 0 0 0 1.654 0m-.827-2.327a2.327 2.327 0 1 1 0 4.654 2.327 2.327 0 0 1 0-4.654M9.827 14.443a.75.75 0 0 0-.75-.75H5.59c-.974 0-1.764.79-1.764 1.764v2.157a.75.75 0 0 0 1.5 0v-2.157c0-.146.118-.264.264-.264h3.487a.75.75 0 0 0 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.75 19.19a.827.827 0 1 1 1.654 0 .827.827 0 0 1-1.654 0m.827-2.327a2.327 2.327 0 1 0 0 4.654 2.327 2.327 0 0 0 0-4.654"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBotFlowOutline;
