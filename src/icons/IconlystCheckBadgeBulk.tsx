import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCheckBadgeBulk = ({
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
      d="m20.704 10.086-.7-.7a1.69 1.69 0 0 1-.493-1.196v-1c0-1.49-1.212-2.7-2.7-2.7h-1.002a1.68 1.68 0 0 1-1.196-.493l-.711-.71a2.706 2.706 0 0 0-3.818.01l-.697.7a1.7 1.7 0 0 1-1.198.494H7.188a2.704 2.704 0 0 0-2.7 2.7v.997c0 .452-.175.877-.494 1.196l-.708.709q-.002.004-.006.006a2.703 2.703 0 0 0 .017 3.813l.699.7c.318.32.494.744.494 1.196v1.005a2.7 2.7 0 0 0 2.698 2.699h.999c.453 0 .878.176 1.196.493l.713.71a2.68 2.68 0 0 0 1.899.784h.012a2.68 2.68 0 0 0 1.903-.796l.7-.7a1.7 1.7 0 0 1 1.197-.494h1.006a2.704 2.704 0 0 0 2.699-2.696V15.81c0-.451.175-.876.492-1.195l.71-.711a2.703 2.703 0 0 0-.01-3.818"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.584 10.558-4.073 4.075a.75.75 0 0 1-1.061 0l-1.977-1.98a.75.75 0 0 1 0-1.062.75.75 0 0 1 1.062.001l1.446 1.45 3.542-3.545a.75.75 0 1 1 1.06 1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCheckBadgeBulk;
