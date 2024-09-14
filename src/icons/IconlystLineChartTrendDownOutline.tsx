import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLineChartTrendDownOutline = ({
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
      d="M7.934 7.633a.75.75 0 0 1 1.06-.019l2.734 2.64 2.57-2.263a.75.75 0 0 1 1.022.028l4.55 4.48a.75.75 0 0 1-1.053 1.068l-4.052-3.989-2.565 2.26a.75.75 0 0 1-1.016-.024l-3.231-3.12a.75.75 0 0 1-.019-1.061"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.342 9.694a.75.75 0 0 1 .75.75v2.588a.75.75 0 0 1-.75.75h-2.587a.75.75 0 0 1 0-1.5h1.837v-1.838a.75.75 0 0 1 .75-.75M4.5 3.369a.75.75 0 0 1 .75.75v14c0 .69.56 1.25 1.25 1.25h14a.75.75 0 1 1 0 1.5h-14a2.75 2.75 0 0 1-2.75-2.75v-14a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLineChartTrendDownOutline;
