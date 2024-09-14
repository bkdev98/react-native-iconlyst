import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst31DaysWarrantyBold = ({
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
      d="M15.846 14.63a.75.75 0 0 1-1.5 0V9.16a.75.75 0 0 1 1.5 0zm-5.64.955c-.668 0-1.296-.26-1.77-.733a.749.749 0 1 1 1.06-1.06 1 1 0 1 0 .709-1.706.75.75 0 0 1-.583-1.222l.77-.954H8.907a.75.75 0 1 1 0-1.5h3.053a.75.75 0 0 1 .584 1.221l-1.055 1.31a2.5 2.5 0 0 1-1.283 4.644m10.498-5.5-.7-.7a1.7 1.7 0 0 1-.493-1.198v-1c0-1.489-1.211-2.7-2.7-2.7h-1.002c-.452 0-.877-.174-1.195-.49l-.711-.71a2.705 2.705 0 0 0-3.82.01l-.696.697a1.7 1.7 0 0 1-1.196.494H7.19a2.704 2.704 0 0 0-2.701 2.7v.997c0 .452-.176.877-.496 1.197l-.712.715a2.7 2.7 0 0 0 .017 3.813l.698.7c.319.32.495.744.495 1.195v1.006a2.7 2.7 0 0 0 2.699 2.7h.997a1.7 1.7 0 0 1 1.197.493l.708.708.022.02a2.68 2.68 0 0 0 1.882.765h.01a2.68 2.68 0 0 0 1.904-.797l.7-.699c.32-.318.746-.494 1.197-.494h1.006a2.703 2.703 0 0 0 2.699-2.696v-1.004c0-.45.176-.875.493-1.195l.712-.71a2.7 2.7 0 0 0-.013-3.817"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst31DaysWarrantyBold;
