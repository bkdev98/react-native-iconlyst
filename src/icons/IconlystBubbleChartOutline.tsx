import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBubbleChartOutline = ({
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
      d="M8.696 3.869a3.761 3.761 0 1 1 0 7.522 3.761 3.761 0 0 1 0-7.522m5.262 3.76a5.261 5.261 0 1 0-10.523 0 5.261 5.261 0 0 0 10.522 0M17.801 13.878a2.264 2.264 0 1 1 0 4.528 2.264 2.264 0 0 1 0-4.528m3.764 2.264a3.764 3.764 0 1 0-7.528 0 3.764 3.764 0 0 0 7.528 0M7.772 17.526a1.421 1.421 0 1 1 0 2.843 1.421 1.421 0 0 1 0-2.843m2.92 1.422a2.921 2.921 0 1 0-5.841 0 2.921 2.921 0 0 0 5.842 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBubbleChartOutline;
