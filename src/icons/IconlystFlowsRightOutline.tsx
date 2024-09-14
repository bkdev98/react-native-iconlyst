import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowsRightOutline = ({
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
      d="M13.058 12.528a.75.75 0 0 1 1.06 0l3.177 3.177a.75.75 0 0 1 0 1.06l-3.177 3.177a.75.75 0 0 1-1.06-1.06l1.896-1.897H9.353a.75.75 0 0 1 0-1.5h5.601l-1.896-1.896a.75.75 0 0 1 0-1.06M2.25 16.235a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m3.176 0a.75.75 0 0 1 .75-.75h.011a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M17.293 4.058a.75.75 0 0 1 1.06 0l3.177 3.176a.75.75 0 0 1 0 1.06l-3.176 3.177a.75.75 0 0 1-1.061-1.06l1.896-1.896h-8.777a.75.75 0 1 1 0-1.5h8.777l-1.896-1.897a.75.75 0 0 1 0-1.06M3.309 7.765a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5h-.01a.75.75 0 0 1-.75-.75m3.176 0a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5h-.01a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlowsRightOutline;
