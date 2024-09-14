import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowRightOutline = ({
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
      d="M16.47 7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06-1.06l2.72-2.72H12a.75.75 0 1 1 0-1.5h7.19l-2.72-2.72a.75.75 0 0 1 0-1.06M8.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M5.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M2.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlowRightOutline;
