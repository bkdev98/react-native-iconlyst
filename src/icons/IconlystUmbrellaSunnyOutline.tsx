import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUmbrellaSunnyOutline = ({
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
      d="M21.254 3.246a.75.75 0 0 1 0 1.06l-.681.682a.75.75 0 0 1-1.06-1.06l.68-.682a.75.75 0 0 1 1.061 0m-10.001 0a.75.75 0 0 1 1.06 0l.682.682a.75.75 0 1 1-1.06 1.06l-.682-.681a.75.75 0 0 1 0-1.06m8.26 8.26a.75.75 0 0 1 1.06 0l.681.681a.75.75 0 1 1-1.06 1.06l-.682-.68a.75.75 0 0 1 0-1.061M16.254 5.845c-1.17 0-2.147.837-2.36 1.946a.75.75 0 0 1-1.473-.283 3.903 3.903 0 1 1 5.19 4.4.75.75 0 1 1-.522-1.407 2.404 2.404 0 0 0-.835-4.656M16.254 1.75a.75.75 0 0 1 .75.75v.015a.75.75 0 0 1-1.5 0V2.5a.75.75 0 0 1 .75-.75m4.982 6.497a.75.75 0 0 1 .75-.75h.027a.75.75 0 0 1 0 1.5h-.027a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.003 14.125c.48.047.908.122 1.314.243.493.148.929.357 1.374.639 1.468-.544 2.691-.834 3.943-.831 1.249.002 2.47.296 3.93.829.481-.318.94-.542 1.449-.689a6 6 0 0 1 1.257-.21 6.672 6.672 0 0 0-13.267.02m-1.536.698a8.17 8.17 0 0 1 16.341 0 .75.75 0 0 1-.736.75c-.732.013-1.22.062-1.643.184-.412.119-.803.319-1.314.693a.75.75 0 0 1-.71.096c-1.56-.594-2.684-.868-3.774-.87-1.088-.003-2.21.265-3.763.868a.75.75 0 0 1-.702-.085c-.474-.332-.856-.527-1.28-.654-.433-.13-.947-.199-1.703-.233a.75.75 0 0 1-.716-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.638 14.19a.75.75 0 0 1 .75.75v5.112a2.198 2.198 0 1 1-4.396 0v-.268a.75.75 0 0 1 1.5 0v.268a.698.698 0 1 0 1.396 0V14.94a.75.75 0 0 1 .75-.75M10.638 5.279a.75.75 0 0 1 .75.75v1.373a.75.75 0 1 1-1.5 0V6.029a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUmbrellaSunnyOutline;
