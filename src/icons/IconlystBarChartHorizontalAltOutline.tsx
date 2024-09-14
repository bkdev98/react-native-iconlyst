import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartHorizontalAltOutline = ({
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
      d="M3.463 4.976A2.607 2.607 0 0 1 6.07 2.369h8.335a2.608 2.608 0 0 1 0 5.214H6.07a2.607 2.607 0 0 1-2.607-2.607M6.07 3.869a1.107 1.107 0 1 0 0 2.214h8.335a1.108 1.108 0 0 0 0-2.214zm0 14.285a1.107 1.107 0 1 0 0 2.215h12.86a1.108 1.108 0 1 0 0-2.215zm-2.608 1.107a2.607 2.607 0 0 1 2.607-2.607h12.862a2.608 2.608 0 1 1 0 5.215H6.069a2.607 2.607 0 0 1-2.607-2.608M3.461 12.119A2.607 2.607 0 0 1 6.07 9.51h3.559a2.607 2.607 0 1 1 0 5.215h-3.56a2.607 2.607 0 0 1-2.607-2.607M6.07 11.01a1.107 1.107 0 1 0 0 2.215h3.559a1.107 1.107 0 1 0 0-2.215z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarChartHorizontalAltOutline;
