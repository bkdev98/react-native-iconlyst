import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDonutBarChartLight = ({
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
      strokeWidth={1.5}
      d="M3.5 12.119a7.826 7.826 0 0 0 7.326 7.81c.275.018.5-.208.5-.484v-2.25c0-.277-.225-.498-.5-.528a4.576 4.576 0 0 1 0-9.096c.275-.03.5-.251.5-.528v-2.25a.477.477 0 0 0-.5-.484 7.826 7.826 0 0 0-7.326 7.81ZM14.19 3.127a.477.477 0 0 0-.501.485v2.25c0 .276.225.497.5.527a4.56 4.56 0 0 1 2.72 1.297 4.56 4.56 0 0 1 1.328 2.752c.03.274.251.5.528.5h2.25a.477.477 0 0 0 .484-.501 7.8 7.8 0 0 0-2.392-5.147 7.8 7.8 0 0 0-4.918-2.163ZM13.689 20.625c0 .277.225.503.5.485a7.83 7.83 0 0 0 7.31-7.31.477.477 0 0 0-.484-.5h-2.25c-.277 0-.498.225-.528.5a4.58 4.58 0 0 1-4.048 4.048c-.275.03-.5.251-.5.527z"
    />
  </Svg>
);
export default IconlystDonutBarChartLight;
