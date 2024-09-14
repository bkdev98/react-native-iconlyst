import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoBulksharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M.879 19.91h15.48V5.16H.879z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path fill={props.color} d="M12.488 10.37h-4.7v-1.5h4.7z" />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.627 9.65v5.525l5.994 4.344V5.586z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoBulksharp;
