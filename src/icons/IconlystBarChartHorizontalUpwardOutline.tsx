import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartHorizontalUpwardOutline = ({
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
      d="M3.462 4.975a2.607 2.607 0 0 1 2.607-2.607h12.86a2.608 2.608 0 1 1 0 5.215H6.07a2.607 2.607 0 0 1-2.607-2.608m2.607-1.107a1.107 1.107 0 1 0 0 2.215h12.86a1.108 1.108 0 1 0 0-2.215zM3.462 19.261a2.607 2.607 0 0 1 2.608-2.607h3.558a2.607 2.607 0 1 1 0 5.214H6.07a2.607 2.607 0 0 1-2.608-2.607m2.608-1.107a1.107 1.107 0 1 0 0 2.214h3.558a1.107 1.107 0 1 0 0-2.214zM3.464 12.118a2.607 2.607 0 0 1 2.608-2.607h7.285a2.608 2.608 0 1 1 0 5.214H6.072a2.607 2.607 0 0 1-2.608-2.607m2.608-1.107a1.107 1.107 0 1 0 0 2.214h7.285a1.108 1.108 0 1 0 0-2.214z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarChartHorizontalUpwardOutline;
