import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLineChartTrendUpOutline = ({
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
      d="M4.5 3.369a.75.75 0 0 1 .75.75v14c0 .69.56 1.25 1.25 1.25h14a.75.75 0 1 1 0 1.5h-14a2.75 2.75 0 0 1-2.75-2.75v-14a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.008 13.554a.75.75 0 0 0 1.06.018l2.734-2.64 2.57 2.263a.75.75 0 0 0 1.022-.028l4.549-4.479a.75.75 0 0 0-1.053-1.069l-4.051 3.99-2.565-2.26a.75.75 0 0 0-1.017.023l-3.23 3.121a.75.75 0 0 0-.02 1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.416 11.492a.75.75 0 0 0 .75-.75V8.155a.75.75 0 0 0-.75-.75H16.83a.75.75 0 0 0 0 1.5h1.837v1.837c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLineChartTrendUpOutline;
