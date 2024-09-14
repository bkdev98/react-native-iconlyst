import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar8Bulksharp = ({
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
      d="m12.25.93-2.117 7.408-7.472-1.874L8.024 12l-5.363 5.536 7.472-1.874 2.117 7.407z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m12.25.93 2.117 7.408 7.472-1.874L16.476 12l5.363 5.536-7.472-1.874-2.117 7.407z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStar8Bulksharp;
