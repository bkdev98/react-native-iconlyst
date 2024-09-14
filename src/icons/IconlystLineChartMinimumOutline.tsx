import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLineChartMinimumOutline = ({
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
      d="M4.5 3.37a.75.75 0 0 1 .75.75v14c0 .69.56 1.25 1.25 1.25h14a.75.75 0 0 1 0 1.5h-14a2.75 2.75 0 0 1-2.75-2.75v-14a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.968 14.555c.652.8 1.616 1.382 2.885 1.382s2.232-.581 2.885-1.382c.637-.783.98-1.772 1.088-2.665.155-1.287.47-2.22.87-2.81.384-.564.82-.791 1.313-.791a.75.75 0 0 0 0-1.5c-1.081 0-1.947.556-2.553 1.449-.588.866-.95 2.064-1.12 3.472-.08.673-.338 1.378-.761 1.897-.408.5-.964.83-1.722.83s-1.315-.33-1.722-.83c-.423-.519-.681-1.224-.762-1.897-.17-1.408-.531-2.606-1.12-3.472-.606-.893-1.471-1.449-2.553-1.449a.75.75 0 1 0 0 1.5c.493 0 .93.227 1.313.791.4.59.716 1.523.87 2.81.108.893.451 1.882 1.089 2.665"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLineChartMinimumOutline;
