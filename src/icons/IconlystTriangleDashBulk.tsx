import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTriangleDashBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M7.155 19.249H4.999a.98.98 0 0 1-.865-.5.96.96 0 0 1 .004-.982l1.078-1.881a1 1 0 0 0-1.735-.994l-1.075 1.875a2.94 2.94 0 0 0-.006 2.979 2.97 2.97 0 0 0 2.599 1.503h2.156a1 1 0 1 0 0-2M21.605 16.785l-1.068-1.88a1 1 0 1 0-1.739.988l1.07 1.884a.96.96 0 0 1-.003.977.98.98 0 0 1-.86.495H16.91a1 1 0 1 0 0 2h2.097c1.08 0 2.048-.56 2.59-1.493a2.95 2.95 0 0 0 .009-2.971M8.764 7.745c.479.274 1.09.112 1.366-.366l1.058-1.83a.98.98 0 0 1 .86-.496h.002c.173 0 .604.049.863.5l1.038 1.82a1 1 0 1 0 1.738-.99l-1.04-1.822a2.97 2.97 0 0 0-2.596-1.508h-.005a2.96 2.96 0 0 0-2.592 1.496l-1.057 1.83a1 1 0 0 0 .365 1.366" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.368 8.442a1 1 0 0 0-1.367.363l-2.118 3.651a1 1 0 0 0 1.73 1.004l2.118-3.65a1 1 0 0 0-.363-1.368M14.12 19.248H9.953a1 1 0 1 0 0 2h4.167a1 1 0 1 0 0-2M18.279 13.948a1 1 0 0 0 .868-1.496l-2.08-3.641a.999.999 0 1 0-1.736.992l2.078 3.64c.185.324.523.505.87.505"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTriangleDashBulk;
