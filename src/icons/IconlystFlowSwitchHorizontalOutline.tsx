import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowSwitchHorizontalOutline = ({
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
      d="M16.764 4.058a.75.75 0 0 1 1.06 0l3.177 3.176a.75.75 0 0 1 0 1.06l-3.177 3.177a.75.75 0 0 1-1.06-1.06l1.896-1.896H9.882a.75.75 0 1 1 0-1.5h8.778l-1.896-1.897a.75.75 0 0 1 0-1.06M2.779 7.765a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5h-.01a.75.75 0 0 1-.75-.75m3.177 0a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M7.236 12.529a.75.75 0 0 1 0 1.06L5.34 15.485h8.778a.75.75 0 1 1 0 1.5H5.34l1.896 1.896a.75.75 0 0 1-1.06 1.061l-3.177-3.176a.75.75 0 0 1 0-1.061l3.176-3.177a.75.75 0 0 1 1.061 0m9.297 3.706a.75.75 0 0 1 .75-.75h.011a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75m3.177 0a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlowSwitchHorizontalOutline;
