import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowsLeftOutline = ({
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
      d="M10.942 4.058a.75.75 0 0 1 0 1.06L9.046 7.015h5.601a.75.75 0 1 1 0 1.5H9.046l1.896 1.896a.75.75 0 1 1-1.06 1.06L6.705 8.295a.75.75 0 0 1 0-1.06l3.177-3.177a.75.75 0 0 1 1.06 0m6.121 3.707a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75m3.177 0a.75.75 0 0 1 .75-.75H21a.75.75 0 1 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M6.707 12.529a.75.75 0 0 1 0 1.06l-1.896 1.896h8.778a.75.75 0 0 1 0 1.5H4.81l1.896 1.896a.75.75 0 0 1-1.06 1.061L2.47 16.766a.75.75 0 0 1 0-1.06l3.177-3.177a.75.75 0 0 1 1.06 0m9.298 3.706a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75m3.176 0a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlowsLeftOutline;
