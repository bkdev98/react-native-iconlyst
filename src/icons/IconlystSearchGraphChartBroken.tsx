import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchGraphChartBroken = ({
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
      d="M3.714 11.418a8.418 8.418 0 1 0 16.835 0A8.418 8.418 0 0 0 5.076 6.826M17.861 17.582l3.425 3.416M8.863 10.447v3.656m3.298-5.97v5.97m3.242-1.904v1.904"
    />
  </Svg>
);
export default IconlystSearchGraphChartBroken;
