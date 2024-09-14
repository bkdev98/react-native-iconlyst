import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDotBarLineChartTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.188 20.116v-6.573m7.312 6.573v-9.39m7.312 9.39V16.36"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.875 6.277 6.767 7.868M13.922 6.694l4.491 3.442M11.306 4.615a1.688 1.688 0 1 0 2.387 2.388 1.688 1.688 0 0 0-2.387-2.388M18.618 9.911a1.688 1.688 0 1 0 2.388 2.388 1.688 1.688 0 0 0-2.388-2.388M3.994 7.248a1.688 1.688 0 1 0 2.388 2.388 1.688 1.688 0 0 0-2.388-2.388"
    />
  </Svg>
);
export default IconlystDotBarLineChartTwoTone;
