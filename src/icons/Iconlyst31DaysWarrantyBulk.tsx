import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst31DaysWarrantyBulk = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.704 10.085-.7-.7a1.7 1.7 0 0 1-.493-1.198v-1c0-1.489-1.211-2.7-2.7-2.7h-1.002c-.452 0-.877-.174-1.195-.49l-.711-.71a2.705 2.705 0 0 0-3.82.01l-.696.697a1.7 1.7 0 0 1-1.196.494H7.19a2.704 2.704 0 0 0-2.701 2.7v.997c0 .452-.176.877-.496 1.197l-.712.715a2.7 2.7 0 0 0 .017 3.813l.698.7c.319.32.495.744.495 1.195v1.006a2.7 2.7 0 0 0 2.699 2.7h.997a1.7 1.7 0 0 1 1.197.493l.708.708.022.02a2.68 2.68 0 0 0 1.882.765h.01a2.68 2.68 0 0 0 1.904-.797l.7-.699c.32-.318.746-.494 1.197-.494h1.006a2.703 2.703 0 0 0 2.699-2.696v-1.004c0-.45.176-.875.493-1.195l.712-.71a2.7 2.7 0 0 0-.013-3.817"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.096 15.38a.75.75 0 0 0 .75-.75V9.16a.75.75 0 0 0-1.5 0v5.47c0 .414.335.75.75.75M8.436 14.852a2.49 2.49 0 0 0 1.77.733 2.5 2.5 0 0 0 1.283-4.645l1.054-1.309a.751.751 0 0 0-.583-1.22H8.906a.75.75 0 1 0 0 1.5h1.486l-.77.953a.75.75 0 0 0 .584 1.221 1 1 0 1 1-.71 1.706.749.749 0 1 0-1.06 1.061"
    />
  </Svg>
);
export default Iconlyst31DaysWarrantyBulk;
