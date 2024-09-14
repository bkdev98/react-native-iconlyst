import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircularChartOutline = ({
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
      d="M11.75 3.119a.75.75 0 0 1 .75-.75 9.75 9.75 0 1 1-7.597 3.639.75.75 0 1 1 1.169.94 8.25 8.25 0 1 0 6.428-3.08.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.75 6.619a.75.75 0 0 1 .75-.75 6.25 6.25 0 1 1-6.217 6.886.75.75 0 0 1 1.492-.152A4.75 4.75 0 1 0 12.5 7.369a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.75 10.119a.75.75 0 0 1 .75-.75 2.75 2.75 0 1 1-.855 5.363.75.75 0 0 1 .466-1.425 1.25 1.25 0 1 0 .389-2.438.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCircularChartOutline;
