import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartHorizontalDownwardOutline = ({
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
      d="M6.07 3.868a1.107 1.107 0 1 0 0 2.215h3.558a1.107 1.107 0 1 0 0-2.215zM3.461 4.976A2.607 2.607 0 0 1 6.07 2.368h3.56a2.607 2.607 0 1 1 0 5.215h-3.56a2.607 2.607 0 0 1-2.607-2.607M6.07 18.154a1.107 1.107 0 1 0 0 2.214H18.93a1.108 1.108 0 1 0 0-2.214zM3.462 19.26a2.607 2.607 0 0 1 2.607-2.607H18.93a2.608 2.608 0 1 1 0 5.214H6.07a2.607 2.607 0 0 1-2.607-2.607M6.071 11.01a1.107 1.107 0 1 0 0 2.215h7.286a1.108 1.108 0 1 0 0-2.214zm-2.607 1.108A2.607 2.607 0 0 1 6.07 9.511h7.286a2.608 2.608 0 1 1 0 5.214H6.07a2.607 2.607 0 0 1-2.607-2.607"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarChartHorizontalDownwardOutline;
