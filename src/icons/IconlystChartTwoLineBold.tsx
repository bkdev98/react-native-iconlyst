import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartTwoLineBold = ({
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
      d="M15.617 15.5a.75.75 0 0 1-1.5 0v-3.53a.75.75 0 0 1 1.5 0zm-4.733 0a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 1.5 0zm5.834-13H8.284C5.123 2.5 3 4.723 3 8.03v7.94c0 3.307 2.123 5.53 5.284 5.53h8.433c3.16 0 5.283-2.223 5.283-5.53V8.03c0-3.307-2.122-5.53-5.282-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChartTwoLineBold;
