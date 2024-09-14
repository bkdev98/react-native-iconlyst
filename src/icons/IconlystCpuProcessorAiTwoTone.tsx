import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessorAiTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.021 15.085c0 2.277 1.426 3.89 3.71 3.89h6.538c2.286 0 3.704-1.613 3.704-3.89V8.923c0-2.284-1.418-3.899-3.704-3.899H8.732c-2.278 0-3.71 1.615-3.71 3.9zM9.613 20.997v-2.021m4.774 2.02v-2.02M5.021 9.617H3m2.021 4.766H3M9.613 5.024V3.003m4.774 2.02v-2.02M21 9.616h-2.03M21 14.383h-2.03"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.5 12.513-.091-.245a3.37 3.37 0 0 0-1.99-1.993l-.246-.091.245-.09a3.37 3.37 0 0 0 1.99-1.994l.091-.245.091.245a3.37 3.37 0 0 0 1.99 1.993l.245.09-.244.092a3.37 3.37 0 0 0-1.991 1.993zM14.387 15.29a1.77 1.77 0 0 0-1.177-1.18 1.77 1.77 0 0 0 1.177-1.178 1.77 1.77 0 0 0 1.177 1.179 1.77 1.77 0 0 0-1.177 1.178"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCpuProcessorAiTwoTone;
