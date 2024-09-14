import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHelpSignBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} opacity={0.4}>
      <Path d="M17.401 5.538c.413-.412.388-1.093-.095-1.42A9.46 9.46 0 0 0 12 2.5c-1.965 0-3.79.597-5.306 1.619-.483.326-.508 1.007-.096 1.42l1.899 1.897.024.025.619.62c.34.34.87.376 1.314.191A4 4 0 0 1 12 7.966c.547 0 1.07.109 1.545.306.445.185.975.148 1.315-.192l.619-.619.024-.025zM17.634 19.65a.596.596 0 0 0 .052-.904l-.01-.009-2.817-2.817c-.34-.34-.87-.376-1.314-.192a4 4 0 0 1-1.545.306 4 4 0 0 1-1.545-.306c-.444-.184-.974-.148-1.314.192l-.634.635-.009.008-1.899 1.9c-.412.412-.388 1.093.096 1.419A9.46 9.46 0 0 0 12 21.5c2.11 0 4.058-.687 5.634-1.85" />
    </G>
    <Path
      fill={props.color}
      d="M18.55 17.313c.413.413 1.094.388 1.42-.095a9.46 9.46 0 0 0 1.618-5.306c0-1.965-.596-3.79-1.618-5.306-.326-.484-1.007-.508-1.42-.096L16.653 8.41l-.026.024-.619.619c-.34.34-.376.87-.192 1.314.198.476.307.998.307 1.546 0 .547-.11 1.07-.307 1.545-.184.444-.148.975.192 1.315l.62.619.025.024zM4.439 17.546c.217.295.644.31.903.052l.009-.01 2.817-2.817c.34-.34.377-.87.193-1.314a4 4 0 0 1-.307-1.545c0-.547.109-1.07.306-1.545.184-.444.148-.974-.192-1.314l-.634-.634-.009-.009-1.899-1.899c-.412-.412-1.093-.388-1.42.096a9.46 9.46 0 0 0-1.618 5.305c0 2.11.688 4.058 1.85 5.634"
    />
  </Svg>
);
export default IconlystHelpSignBulk;
