import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountBadgeBold = ({
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
      d="M14.304 15.33a.947.947 0 0 1 0-1.892.947.947 0 0 1 0 1.892m-4.247-.349a.74.74 0 0 1-.53.22.749.749 0 0 1-.53-1.28l4.897-4.896a.75.75 0 0 1 1.06 1.06zM9.54 8.672c.522 0 .947.424.947.946a.946.946 0 1 1-.947-.946m11.165 1.413-.7-.698a1.7 1.7 0 0 1-.493-1.198v-1a2.703 2.703 0 0 0-2.7-2.699h-1.004a1.7 1.7 0 0 1-1.194-.493l-.712-.71a2.704 2.704 0 0 0-3.816.01l-.698.7a1.7 1.7 0 0 1-1.198.494H7.189a2.703 2.703 0 0 0-2.698 2.65l-.002.05v.996c0 .452-.176.876-.494 1.196l-.708.71-.024.025A2.68 2.68 0 0 0 2.5 12.01a2.68 2.68 0 0 0 .797 1.903l.698.698c.319.321.495.746.495 1.197v1.005a2.7 2.7 0 0 0 2.698 2.7h.999c.45 0 .876.174 1.197.491l.683.684a2.693 2.693 0 0 0 1.929.81c.694 0 1.39-.266 1.915-.796l.698-.699a1.68 1.68 0 0 1 1.197-.494h1.007a2.7 2.7 0 0 0 2.698-2.696V15.81c0-.452.175-.876.492-1.195l.712-.712a2.703 2.703 0 0 0-.012-3.817"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiscountBadgeBold;
